import { IVehicle } from '../vehicles/contracts/vehicle';

export interface IRental {
  userName: string;
  daysOfRental: number;
  vehicle: IVehicle;
  calculateRentalCosts(): number;
  print(): string;
}
