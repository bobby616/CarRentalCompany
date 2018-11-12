import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { IUser } from '../../../models/contracts/user';

@injectable()
export class RemoveVehicle implements ICommand {

    private _factory: IModels;
    private _travelDatabase: ITravelDatabase;

    constructor(@inject(TYPES.data) data: ITravelDatabase,
        @inject(TYPES.models) factory: IModels) {
        this._factory = factory;
        this._travelDatabase = data;
    }

    public execute(parameters: string[]): string {
        const [userName, vehicleId] = parameters;
        if (this._travelDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
            throw new Error('THERE IS NO SUCH USER!!');
        }
        if (this._travelDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
            throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
        }

        this._travelDatabase.vehicles.splice(+vehicleId, 1);

        return `Vehicle ${this._travelDatabase.vehicles[+vehicleId].vehicleType} with ID ${+vehicleId}  was removed by ${userName}.`;
    }
}
