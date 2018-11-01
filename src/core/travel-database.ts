import { IJourney, ITicket, IVehicle } from '../models';
import { ITravelDatabase } from './contracts/travel-database';
export class TravelDatabase implements ITravelDatabase {

  private static readonly SINGLE_INSTANCE: ITravelDatabase = new TravelDatabase();

  private readonly _vehicles: IVehicle[];

  private readonly _journeys: IJourney[];

  private readonly _tickets: ITicket[];

  private constructor() {
    this._journeys = [];
    this._tickets = [];
    this._vehicles = [];
  }

  public get vehicles(): IVehicle[] {
    return this._vehicles;
  }

  public get journeys(): IJourney[] {
    return this._journeys;
  }

  public get tickets(): ITicket[] {
    return this._tickets;
  }

  public static get INSTANCE(): ITravelDatabase {
    return this.SINGLE_INSTANCE;
  }
}
