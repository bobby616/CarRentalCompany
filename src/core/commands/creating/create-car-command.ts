import { IVehicle } from '../../../models';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { IModels, ITravelDatabase } from './../../contracts';
import { TravelDatabase } from './../../travel-database';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../common/types';

@injectable()
export class CreateCar implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor(@inject(TYPES.database) _travelDatabase: ITravelDatabase) {
    this._factory = new Models();
  }

  public execute(parameters: string[]): string {
    const [passengerCapacity, pricePerDay, engine, color, transmissionType, brand, topSpeed] = parameters;
    if (isNaN(+passengerCapacity) || isNaN(+pricePerDay) || engine.length <= 0 ||
      color.length <= 0 || !(transmissionType.localeCompare('Automatic') ||
      transmissionType.localeCompare('Manual')) || brand.length <= 0 || isNaN(+topSpeed)) {
      throw new Error('Failed to parse CreateCar command parameters.');
    }

    const car: IVehicle = this._factory.createCar(+passengerCapacity, +pricePerDay, engine,
      color, transmissionType, brand, +topSpeed);

    this._travelDatabase.vehicles.push(car);

    return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
  }
}
