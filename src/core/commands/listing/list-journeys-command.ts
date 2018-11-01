import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';
import { IJourney } from './../../../models/contracts/journey';
export class ListJourneys implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    return `${
      this._travelDatabase.journeys.length === 0
        ? 'There are no registered journeys.'
        : this._travelDatabase.journeys.map((journey: IJourney) => journey.print()).join('\n####################\n')
      }`;
  }
}
