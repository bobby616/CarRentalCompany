import { injectable } from 'inversify';
import { IRental, IVehicle } from '../models';
import { IUser } from '../models/contracts/user';
import { ITravelDatabase } from './contracts/travel-database';

@injectable()

export class TravelDatabase implements ITravelDatabase {

  private readonly _vehicles: IVehicle[];

  private readonly _rentals: IRental[];

  private readonly _users: IUser[];

  public constructor() {
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

}
