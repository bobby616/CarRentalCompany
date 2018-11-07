import { IVehicle } from '../../../models';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { IModels, ITravelDatabase } from './../../contracts';
import { TravelDatabase } from './../../travel-database';
export class CreateBus implements ICommand {

    private _factory: IModels;
    private _travelDatabase: ITravelDatabase;

    constructor() {
        this._factory = new Models();
        this._travelDatabase = TravelDatabase.INSTANCE;
    }

    public execute(parameters: string[]): string {
        const [passengerCapacity, pricePerKilometer, engine, color, transmissionType, topSpeed] = parameters;
        if (isNaN(+passengerCapacity) || isNaN(+pricePerKilometer) || engine.length <= 0 ||
            color.length <= 0 || !transmissionType.localeCompare('Automatic') ||
            !transmissionType.localeCompare('Manual') || isNaN(+topSpeed)) {
            throw new Error('Failed to parse CreateCar command parameters.');
        }

        const motorcycle: IVehicle = this._factory.createMotorcycle(+passengerCapacity, +pricePerKilometer, engine,
            color, transmissionType, +topSpeed);

        this._travelDatabase.vehicles.push(motorcycle);

        return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
    }
}
