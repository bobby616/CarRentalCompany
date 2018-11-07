import { IVehicle } from '../vehicles/contracts/vehicle';

export interface IRental {
  clientFirstName: string;
  clientLastName: string;
  daysOfRental: number;
  vehicle: IVehicle;
  calculateTravelCosts(): number;
  print(): string;
}
