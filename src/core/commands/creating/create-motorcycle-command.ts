import { IVehicle } from '../../../models';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { IModels, ITravelDatabase } from './../../contracts';
import { TravelDatabase } from './../../travel-database';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../common/types';
@injectable()
export class CreateMotorcycle implements ICommand {

    private _factory: IModels;

    constructor(@inject(TYPES.database) private readonly _travelDatabase: ITravelDatabase) {
        this._factory = new Models();
    }

    public execute(parameters: string[]): string {
        const [passengerCapacity, pricePerDay, engine, color, transmissionType, brand, topSpeed] = parameters;
        if (isNaN(+passengerCapacity) || isNaN(+pricePerDay) || engine.length <= 0 ||
            color.length <= 0 || !(transmissionType.localeCompare('Automatic') ||
            transmissionType.localeCompare('Manual')) || brand.length <= 0 || isNaN(+topSpeed)) {
            throw new Error('Failed to parse CreateMotorcycle command parameters.');
        }

        const motorcycle: IVehicle = this._factory
        .createMotorcycle(+passengerCapacity, +pricePerDay, engine, color, transmissionType, brand, +topSpeed);

        this._travelDatabase.vehicles.push(motorcycle);

        return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
    }
}
