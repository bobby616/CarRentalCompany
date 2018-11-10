import { VehicleType } from '../common/vehicle-type';

export interface IVehicle {
  brand: string;
  engine: string;
  passengerCapacity: number;
  pricePerDay: number;
  color: string;
  transmissionType: string;
  vehicleType: VehicleType;
  state: string;
  print(): string;
}
