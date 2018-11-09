import { IVehicle, IRental } from '../models';
import { ITravelDatabase } from './contracts/travel-database';
export class TravelDatabase implements ITravelDatabase {

  private static readonly SINGLE_INSTANCE: ITravelDatabase = new TravelDatabase();

  private readonly _vehicles: IVehicle[];

  private readonly _rentals: IRental[];


  private constructor() {
    this._rentals = [];
    this._vehicles = [];
  }

  public get vehicles(): IVehicle[] {
    return this._vehicles;
  }

  public get rentals(): IRental[] {
    return this._rentals;
  }

  public static get INSTANCE(): ITravelDatabase {
    return this.SINGLE_INSTANCE;
  }
}
