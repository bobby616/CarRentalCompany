import { VehicleType } from '../common/vehicle-type';
import { TransmissionType } from '../common/transmission-type';

export interface IVehicle {
  engine: string;
  passengerCapacity: number;
  pricePerKilometer: number;
  color: string;
  transmissionType: TransmissionType;
  vehicleType: VehicleType;
  print(): string;
}
