import {IVehicle, IRental } from '../../models';

export interface ITravelDatabase {
  vehicles: IVehicle[];

  rentals: IRental[];

}
