import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';
import { ITicket } from './../../../models/contracts/ticket';
export class CreateTicket implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [journeyId, administrativeCosts] = parameters;

    if (isNaN(+journeyId) || isNaN(+administrativeCosts) || !this._travelDatabase.journeys[+journeyId]) {
      throw new Error('Failed to parse CreateTicket command parameters.');
    }

    const ticket: ITicket = this._factory.createTicket(this._travelDatabase.journeys[+journeyId], +administrativeCosts);

    this._travelDatabase.tickets.push(ticket);

    return `Ticket with ID ${this._travelDatabase.tickets.length - 1} was created.`;
  }
}
