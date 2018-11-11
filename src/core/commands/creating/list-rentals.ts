import { IRental } from '../../../models/contracts/rental';
import { IUser } from '../../../models/contracts/user';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
export class ListRentals implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new Models();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [userName] = parameters;
    if (this._travelDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
      throw new Error('THERE IS NO SUCH USER!!');
  }

    return `${
      this._travelDatabase.rentals.length === 0
        ? 'There are no registered rentals.'
        : this._travelDatabase.rentals.map((rental: IRental) => rental.print()).join('\n####################\n')
      }`;
  }
}
