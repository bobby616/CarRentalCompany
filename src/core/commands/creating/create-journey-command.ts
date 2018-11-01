import { IJourney } from '../../../models';
import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';
export class CreateJourney implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [startLocation, endLocation, distance, vehicleId] = parameters;

    if (isNaN(+distance) || isNaN(+vehicleId) || !this._travelDatabase.vehicles[+vehicleId]) {
      throw new Error('Failed to parse CreateJourney command parameters.');
    }

    const journey: IJourney = this._factory.createJourney(startLocation, endLocation, +distance, this._travelDatabase.vehicles[+vehicleId]);

    this._travelDatabase.journeys.push(journey);

    return `Journey with ID ${this._travelDatabase.journeys.length - 1} was created.`;
  }
}
