import { IRental } from '../../../models';
import { IUser } from '../../../models/contracts/user';
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
    const [userName, daysOfRental, vehicleId] = parameters;

    if (userName.length === 0 || isNaN(+daysOfRental)
      || !this._travelDatabase.vehicles[+vehicleId]) {
      throw new Error('Failed to parse CreateRental command parameters.');
    }
    if (this._travelDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
      throw new Error('THERE IS NO SUCH USER');
    } if (this._travelDatabase.users.find((user: IUser) => user.userName === userName).userType === 1) {
      throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
    }

    this._travelDatabase.vehicles[+vehicleId].state = 'rented';

    const rental: IRental = this._factory
      .createRental(userName, +daysOfRental, this._travelDatabase.vehicles[+vehicleId]);

    this._travelDatabase.rentals.push(rental);

    return `Rental with ID ${this._travelDatabase.rentals.length - 1} was created.`;
  }
}
