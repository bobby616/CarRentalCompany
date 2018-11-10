import { IRental } from '../../../models';
import { IModels, ITravelDatabase, IUserDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { IUser } from '../../../models/contracts/user';
import { UserDatabase } from '../../user-database';
export class CreateRental implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;
  private _userDatabase: IUserDatabase;

  constructor() {
    this._factory = new Models();
    this._travelDatabase = TravelDatabase.INSTANCE;
    this._userDatabase = UserDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [userName, daysOfRental, vehicleId] = parameters;

    if (userName.length === 0 || isNaN(+daysOfRental)
      || !this._travelDatabase.vehicles[+vehicleId]) {
      throw new Error('Failed to parse CreateRental command parameters.');
    }
    if (this._userDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
      throw new Error('THERE IS NO SUCH USER');
    } if (this._userDatabase.users.find((user: IUser) => user.userName === userName).userType === 1) {
      throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
    }

    const rental: IRental = this._factory
      .createRental(userName, +daysOfRental, this._travelDatabase.vehicles[+vehicleId]);

    this._travelDatabase.rentals.push(rental);

    return `Rental with ID ${this._travelDatabase.rentals.length - 1} was created.`;
  }
}
