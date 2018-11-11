import {IRental, IVehicle } from '../../models';
import { IUser } from '../../models/contracts/user';

export interface ITravelDatabase {
  vehicles: IVehicle[];

  rentals: IRental[];

  users: IUser[];

}
