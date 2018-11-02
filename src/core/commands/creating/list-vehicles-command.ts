import { IVehicle } from '../../../models';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';

export class ListVehicles implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new Models();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    return `${
      this._travelDatabase.vehicles.length === 0
        ? 'There are no registered vehicles.'
        : this._travelDatabase.vehicles.map((vehicle: IVehicle) => vehicle.print()).join('\n####################\n')
      }`;
  }
}
