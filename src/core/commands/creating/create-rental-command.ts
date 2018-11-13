import { inject, injectable } from 'inversify';
import { IRental } from '../../../models';
import { IUser } from '../../../models/contracts/user';
import { TYPES } from '../../common/types';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Availability } from './../../../models/vehicles/common/availability';

@injectable()
export class CreateRental implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor(@inject(TYPES.data) data: ITravelDatabase,
  @inject(TYPES.models) factory: IModels) {
    this._factory = factory;
    this._travelDatabase = data;
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

    this._travelDatabase.vehicles[+vehicleId].state = Availability.Rented;

    const rental: IRental = this._factory
      .createRental(userName, +daysOfRental, this._travelDatabase.vehicles[+vehicleId]);

    this._travelDatabase.rentals.push(rental);

    return `Rental with ID ${this._travelDatabase.rentals.length - 1} was created.`;
  }
}
