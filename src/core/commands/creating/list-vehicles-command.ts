import { IVehicle } from '../../../models';
import { IModels, ITravelDatabase, IUserDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { IUser } from '../../../models/contracts/user';
import { UserDatabase } from '../../user-database';

export class ListVehicles implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;
  private _userDatabase: IUserDatabase;

  constructor() {
    this._factory = new Models();
    this._travelDatabase = TravelDatabase.INSTANCE;
    this._userDatabase = UserDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [userName] = parameters;
    if (this._userDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
      throw new Error('THERE IS NO SUCH USER!!');
  }
    if (this._userDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
      throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
    }
    

    return `${
      this._travelDatabase.vehicles.length === 0
        ? 'There are no registered vehicles.'
        : this._travelDatabase.vehicles.map((vehicle: IVehicle) => vehicle.print()).join('\n####################\n')
      }`;
  }
}
