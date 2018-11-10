import { IRental } from '../../../models';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../common/types';
@injectable()
export class CreateRental implements ICommand {

  private _factory: IModels;

  constructor(@inject(TYPES.database) private readonly _travelDatabase: ITravelDatabase) {
    this._factory = new Models();
  }

  public execute(parameters: string[]): string {
    const [userName, daysOfRental, vehicleId] = parameters;

    if (userName.length === 0 || isNaN(+daysOfRental)
    || !this._travelDatabase.vehicles[+vehicleId]) {
      throw new Error('Failed to parse CreateRental command parameters.');
    }

    const rental: IRental = this._factory
    .createRental(userName, +daysOfRental, this._travelDatabase.vehicles[+vehicleId]);

    this._travelDatabase.rentals.push(rental);

    return `Rental with ID ${this._travelDatabase.rentals.length - 1} was created.`;
  }
}
