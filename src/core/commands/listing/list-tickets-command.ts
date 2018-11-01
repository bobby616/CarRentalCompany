import { ITicket } from '../../../models';
import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';

export class ListTickets implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    return `${
      this._travelDatabase.tickets.length === 0
        ? 'There are no registered tickets.'
        : this._travelDatabase.tickets.map((ticket: ITicket) => ticket.print()).join('\n####################\n')
      }`;
  }
}
