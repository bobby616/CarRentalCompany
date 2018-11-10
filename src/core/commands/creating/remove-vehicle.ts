import { IRental } from '../../../models';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
export class RemoveVehicle implements ICommand {

    private _factory: IModels;
    private _travelDatabase: ITravelDatabase;

    constructor() {
        this._factory = new Models();
        this._travelDatabase = TravelDatabase.INSTANCE;
    }

    public execute(parameters: string[]): string {
        const [clientFirstName, vehicleId] = parameters;

        if (clientFirstName.length === 0 || !this._travelDatabase.vehicles[+vehicleId]) {
            throw new Error('Failed to parse RemoveVehicle command parameters.');
        }

        this._travelDatabase.vehicles.splice(+vehicleId, 1);

        return `Vehicle with ID ${vehicleId} was removed.`;
    }
}
