import { IVehicle } from '../../../models';
import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';

export class ListVehicles implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
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
