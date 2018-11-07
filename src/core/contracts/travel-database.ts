import {ITicket, IVehicle, IRental } from '../../models';

export interface ITravelDatabase {
  vehicles: IVehicle[];

  rentals: IRental[];

  tickets: ITicket[];
}
