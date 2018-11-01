import { IJourney, ITicket, IVehicle } from '../../models';

export interface ITravelDatabase {
  vehicles: IVehicle[];

  journeys: IJourney[];

  tickets: ITicket[];
}
