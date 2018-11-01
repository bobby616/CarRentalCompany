import {
  Airplane,
  Bus,
  IJourney,
  ITicket,
  IVehicle,
  Journey,
  Ticket,
  Train
} from '../../models';
import { IAgencyFactory } from '../contracts/agency-factory';

export class AgencyFactory implements IAgencyFactory {
  public createBus(passengerCapacity: number, pricePerKilometer: number): IVehicle {
    return new Bus(passengerCapacity, pricePerKilometer);
  }

  public createAirplane(passengerCapacity: number, pricePerKilometer: number, hasFreeFood: boolean): IVehicle {
    return new Airplane(passengerCapacity, pricePerKilometer, hasFreeFood);
  }

  public createTrain(passengerCapacity: number, pricePerKilometer: number, carts: number): IVehicle {
    return new Train(passengerCapacity, pricePerKilometer, carts);
  }

  public createJourney(startLocation: string, endLocation: string, distance: number, vehicle: IVehicle): IJourney {
    return new Journey(startLocation, endLocation, distance, vehicle);
  }

  public createTicket(journey: IJourney, administrativeCosts: number): ITicket {
    return new Ticket(journey, administrativeCosts);
  }
}
