import { IRental, IVehicle } from '../models';
import { ITravelDatabase } from './contracts/travel-database';
import { injectable } from 'inversify';

@injectable()
export class TravelDatabase implements ITravelDatabase {

  private readonly _vehicles: IVehicle[];

  private readonly _rentals: IRental[];

  public constructor() {
    this._rentals = [];
    this._vehicles = [];
  }

  public get vehicles(): IVehicle[] {
    return this._vehicles;
  }

  public get rentals(): IRental[] {
    return this._rentals;
  }

}
