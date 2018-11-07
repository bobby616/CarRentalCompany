import { VehicleType } from '../common/vehicle-type';

export interface IVehicle {
  engine: string;
  passengerCapacity: number;
  pricePerKilometer: number;
  color: string;
  transmissionType: string;
  vehicleType: VehicleType;
  print(): string;
}
