import { VehicleType } from '.';
import { IRental } from './contracts/rental';
import { IVehicle } from './vehicles/contracts/vehicle';

export class Rental implements IRental {

  private readonly _clientFirstName: string;

  private readonly _clientLastName: string;

  private readonly _daysOfRental: number;

  private readonly _vehicle: IVehicle;

  private readonly _minLength = 0;

  private readonly _maxLength = 20;

  private readonly _minDays = 0;



  public constructor(
    clientFirstName: string,
    clientLastName: string,
    daysOfRental: number,
    vehicle: IVehicle
  ) {
    if (clientFirstName.length < this._minLength || clientFirstName.length > this._maxLength) {
      throw new Error(
        `The First Name cannot be less than ${this._minLength} or more than ${this._maxLength} symbols long.`
      );
    }

    if (clientLastName.length < this._minLength || clientLastName.length > this._maxLength) {
      throw new Error(`The Last Name cannot be less than ${this._minLength} or more than 
      ${this._maxLength} symbols long.`);
    }

    if (daysOfRental <= this._minDays) {
      throw new Error(`The rental cannot be less than ${this._minDays} long`);
    }

    this._clientFirstName = clientFirstName;
    this._clientLastName = clientLastName;
    this._daysOfRental = daysOfRental;
    this._vehicle = vehicle;
  }

  public get clientFirstName(): string {
    return this._clientFirstName;
  }

  public get clientLastName(): string {
    return this._clientLastName;
  }

  public get daysOfRental(): number {
    return this._daysOfRental;
  }

  public get vehicle(): IVehicle {
    return this._vehicle;
  }

  public calculateTravelCosts(): number {
    return this.daysOfRental * this.vehicle.pricePerKilometer;
  }

  public print(): string {
    return (
      `Journey ----
Client First Name: ${this.clientFirstName}
Client Last Name: ${this.clientLastName}
Duration of the rental: ${this.daysOfRental}
Vehicle type: ${VehicleType[this.vehicle.vehicleType]}
Travel costs: ${this.calculateTravelCosts()}`);
  }
}
