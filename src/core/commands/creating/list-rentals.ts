import { IRental } from '../../../models/contracts/rental';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../common/types';

@injectable()
export class ListRentals implements ICommand {

  private _factory: IModels;

  constructor(@inject(TYPES.database) private readonly _travelDatabase: ITravelDatabase) {
    this._factory = new Models();
  }

  public execute(parameters: string[]): string {
    return `${
      this._travelDatabase.rentals.length === 0
        ? 'There are no registered rentals.'
        : this._travelDatabase.rentals.map((journey: IRental) => journey.print()).join('\n####################\n')
      }`;
  }
}
