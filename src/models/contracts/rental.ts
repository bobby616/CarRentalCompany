import { IVehicle } from '../vehicles/contracts/vehicle';

export interface IRental {
  startLocation: string;
  endLocation: string;
  distance: number;
  vehicle: IVehicle;
  calculateTravelCosts(): number;
  print(): string;
}
