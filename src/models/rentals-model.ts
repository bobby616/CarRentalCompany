import { VehicleType } from '.';
import { IRental } from './contracts/rental';
import { IVehicle } from './vehicles/contracts/vehicle';

export class Rental implements IRental {

  private readonly _userName: string;

  private readonly _daysOfRental: number;

  private readonly _vehicle: IVehicle;

  private readonly _minLength: number = 0;

  private readonly _maxLength: number = 20;

  private readonly _minDays: number = 0;

  public constructor(
    userName: string,
    daysOfRental: number,
    vehicle: IVehicle
  ) {
    if (userName.length < this._minLength || userName.length > this._maxLength) {
      throw new Error(
        `The username cannot be less than ${this._minLength} or more than ${this._maxLength} symbols long.`
      );
    }

    if (daysOfRental <= this._minDays) {
      throw new Error(`The rental cannot be less than ${this._minDays} long`);
    }

    this._userName = userName;
    this._daysOfRental = daysOfRental;
    this._vehicle = vehicle;
  }

  public get userName(): string {
    return this._userName;
  }

  public get daysOfRental(): number {
    return this._daysOfRental;
  }

  public get vehicle(): IVehicle {
    return this._vehicle;
  }

  public calculateRentalCosts(): number {
    return this.daysOfRental * this.vehicle.pricePerDay;
  }

  public print(): string {
    return (
      `Rentals ----
Client First Name: ${this.userName}
Duration of the rental: ${this.daysOfRental} days
Vehicle type: ${VehicleType[this.vehicle.vehicleType]}
Travel costs: ${this.calculateRentalCosts()} leva`);
  }
}
