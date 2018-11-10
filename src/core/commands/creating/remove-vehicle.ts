import { IRental } from '../../../models';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';

@injectable()
export class RemoveVehicle implements ICommand {

    private _factory: IModels;

    constructor(@inject(TYPES.database) private readonly _travelDatabase: ITravelDatabase) {
        this._factory = new Models();
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
