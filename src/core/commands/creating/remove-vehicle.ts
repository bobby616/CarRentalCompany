import { inject, injectable } from 'inversify';
import { IUser } from '../../../models/contracts/user';
import { TYPES } from '../../common/types';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';

@injectable()
export class RemoveVehicle implements ICommand {

    private _travelDatabase: ITravelDatabase;

    constructor(@inject(TYPES.data) data: ITravelDatabase,) {
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

        const vehicleToRemove = this._travelDatabase.vehicles[+vehicleId];
        this._travelDatabase.vehicles.splice(+vehicleId, 1);

        return `Vehicle ${vehicleToRemove.vehicleType} with ${+vehicleId} was removed by ${userName}.`;
    }
}
