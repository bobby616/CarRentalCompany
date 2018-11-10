import { IVehicle } from '../../../models';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../common/types';

@injectable()
export class ListVehicles implements ICommand {

  private _factory: IModels;

  constructor(@inject(TYPES.database) private readonly _travelDatabase: ITravelDatabase) {
    this._factory = new Models();
  }

  public execute(parameters: string[]): string {

    return `${
      this._travelDatabase.vehicles.length === 0
        ? 'There are no registered vehicles.'
        : this._travelDatabase.vehicles.map((vehicle: IVehicle) => vehicle.print()).join('\n####################\n')
      }`;
  }
}
