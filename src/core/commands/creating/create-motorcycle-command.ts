import { IVehicle } from '../../../models';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { IModels, ITravelDatabase, IUserDatabase } from './../../contracts';
import { TravelDatabase } from './../../travel-database';
import { IUser } from '../../../models/contracts/user';
import { UserDatabase } from '../../user-database';
export class CreateMotorcycle implements ICommand {

    private _factory: IModels;
    private _travelDatabase: ITravelDatabase;
    private _userDatabase: IUserDatabase;

    constructor() {
        this._factory = new Models();
        this._travelDatabase = TravelDatabase.INSTANCE;
        this._userDatabase = UserDatabase.INSTANCE;
    }

    public execute(parameters: string[]): string {
        const [userName, passengerCapacity, pricePerDay, engine, color, transmissionType, state, brand, topSpeed] = parameters;
        if (isNaN(+passengerCapacity) || isNaN(+pricePerDay) || engine.length <= 0 ||
            color.length <= 0 || !(transmissionType.localeCompare('Automatic') ||
                transmissionType.localeCompare('Manual')) || brand.length <= 0 || isNaN(+topSpeed)) {
            throw new Error('Failed to parse CreateMotorcycle command parameters.');
        }
        if (this._userDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
            throw new Error('THERE IS NO SUCH USER');
        } if (this._userDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
            throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
        }

        const motorcycle: IVehicle = this._factory
        .createMotorcycle(+passengerCapacity, +pricePerDay, engine, color, transmissionType, state, brand, +topSpeed);

        this._travelDatabase.vehicles.push(motorcycle);

        return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
    }
}
