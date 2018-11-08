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
    const [passengerCapacity, pricePerDay, engine, color, transmissionType, brand, busLength] = parameters;
    if (isNaN(+passengerCapacity) || isNaN(+pricePerDay) || engine.length <= 0 ||
      color.length <= 0 || !transmissionType.localeCompare('Automatic') || 
      !transmissionType.localeCompare('Manual')|| brand.length <= 0 || isNaN(+busLength)) {
      throw new Error('Failed to parse CreateBus command parameters.');
    }

    const bus: IVehicle = this._factory.createBus(+passengerCapacity, +pricePerDay, engine,
      color, transmissionType,brand, +busLength);

    this._travelDatabase.vehicles.push(bus);

    return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
  }
}
