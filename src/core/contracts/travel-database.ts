import {IRental, IVehicle } from '../../models';

export interface ITravelDatabase {
  vehicles: IVehicle[];

  rentals: IRental[];

}
