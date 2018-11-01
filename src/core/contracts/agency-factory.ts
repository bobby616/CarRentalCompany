import {
  IJourney,
  ITicket,
  IVehicle
} from '../../models';

export interface IAgencyFactory {
  createBus(passengerCapacity: number, pricePerKilometer: number): IVehicle;

  createAirplane(passengerCapacity: number, pricePerKilometer: number, hasFreeFood: boolean): IVehicle;

  createTrain(passengerCapacity: number, pricePerKilometer: number, carts: number): IVehicle;

  createJourney(startLocation: string, endLocation: string, distance: number, vehicle: IVehicle): IJourney;

  createTicket(journey: IJourney, administrativeCosts: number): ITicket;
}
