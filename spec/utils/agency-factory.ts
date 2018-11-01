import * as Factory from 'factory.ts';
import { IJourney, ITicket, IVehicle, VehicleType } from '../../src/models';

const vehicleFactory: Factory.Sync.Factory<IVehicle> = Factory.Sync.makeFactory<IVehicle>({
  passengerCapacity: 45,
  pricePerKilometer: 1,
  vehicleType: VehicleType.Sea,
  print: (): string => 'test'
});

const journeyFactory: Factory.Sync.Factory<IJourney> = Factory.Sync.makeFactory<IJourney>({
  startLocation: 'Sofia',
  endLocation: 'V Turnovo',
  distance: 20,
  vehicle: vehicleFactory.build(),
  calculateTravelCosts: (): number => 20,
  print: (): string => 'test'
});

const ticketFactory: Factory.Sync.Factory<ITicket> = Factory.Sync.makeFactory<ITicket>({
  journey: journeyFactory.build(),
  administrativeCosts: 1,
  calculatePrice: (): number => 30,
  print: (): string => 'test'
});

export { vehicleFactory, journeyFactory, ticketFactory };
