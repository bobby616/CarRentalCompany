import { inject, injectable } from 'inversify';
import { IRental } from '../../../models/contracts/rental';
import { IUser } from '../../../models/contracts/user';
import { TYPES } from '../../common/types';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
@injectable()
export class ListRentals implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor(@inject(TYPES.data) data: ITravelDatabase,
  @inject(TYPES.models) factory: IModels) {
    this._factory = factory;
    this._travelDatabase = data;
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
