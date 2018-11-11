import { IRental, IVehicle } from '../models';
import { IUser } from '../models/contracts/user';
import { ITravelDatabase } from './contracts/travel-database';
export class TravelDatabase implements ITravelDatabase {

  private static readonly SINGLE_INSTANCE: ITravelDatabase = new TravelDatabase();

  private readonly _vehicles: IVehicle[];

  private readonly _rentals: IRental[];

  private readonly _users: IUser[];

  private constructor() {
    this._rentals = [];
    this._vehicles = [];
    this._users = [];
  }

  public get vehicles(): IVehicle[] {
    return this._vehicles;
  }

  public get rentals(): IRental[] {
    return this._rentals;
  }

  public get users(): IUser[] {
    return this._users;
  }

  public static get INSTANCE(): ITravelDatabase {
    return this.SINGLE_INSTANCE;
  }
}
