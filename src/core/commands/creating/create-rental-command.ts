import { IRental } from '../../../models';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
export class CreateRental implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new Models();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [clientFirstName, clientLastName, daysOfRental, vehicleId] = parameters;

    if (clientFirstName.length === 0 || clientLastName.length === 0 || isNaN(+daysOfRental) 
    || !this._travelDatabase.vehicles[+vehicleId]) {
      throw new Error('Failed to parse CreateRental command parameters.');
    }

    const rental: IRental = this._factory.createRental(clientFirstName, clientLastName, +daysOfRental, this._travelDatabase.vehicles[+vehicleId]);

    this._travelDatabase.rentals.push(rental);

    return `Rental with ID ${this._travelDatabase.rentals.length - 1} was created.`;
  }
}
