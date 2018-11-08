import { IVehicle } from '../vehicles/contracts/vehicle';

export interface IRental {
  clientFirstName: string;
  clientLastName: string;
  daysOfRental: number;
  vehicle: IVehicle;
  calculateRentalCosts(): number;
  print(): string;
}
