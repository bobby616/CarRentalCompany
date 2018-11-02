import { VehicleType } from '.';
import { IRental } from './contracts/rental';
import { IVehicle } from './vehicles/contracts/vehicle';

export class Rental implements IRental {
  private readonly _startLocation: string;

  private readonly _endLocation: string;

  private readonly _distance: number;

  private readonly _vehicle: IVehicle;

  private readonly _minLocationLength: number = 5;

  private readonly _maxLocationLength: number = 25;

  private readonly _minDistance: number = 5;

  private readonly _maxDistance: number = 5000;

  public constructor(
    startLocation: string,
    endLocation: string,
    distance: number,
    vehicle: IVehicle
  ) {
    if (startLocation.length < this._minLocationLength || startLocation.length > this._maxLocationLength) {
      throw new Error(
        `The startLocation's length cannot be less than ${this._minLocationLength} or more than ${this._maxLocationLength} symbols long.`
      );
    }

    if (endLocation.length < this._minLocationLength || endLocation.length > this._maxLocationLength) {
      throw new Error(`The endLocation's length cannot be less than ${this._minLocationLength} or more than 25 symbols long.`);
    }

    if (distance < this._minDistance || distance > this._maxDistance) {
      throw new Error(`The distance cannot be less than ${this._minDistance} or more than ${this._maxDistance} kilometers.`);
    }

    this._startLocation = startLocation;
    this._endLocation = endLocation;
    this._distance = distance;
    this._vehicle = vehicle;
  }

  public get startLocation(): string {
    return this._startLocation;
  }

  public get endLocation(): string {
    return this._endLocation;
  }

  public get distance(): number {
    return this._distance;
  }

  public get vehicle(): IVehicle {
    return this._vehicle;
  }

  public calculateTravelCosts(): number {
    return this.distance * this.vehicle.pricePerKilometer;
  }

  public print(): string {
    return (
      `Journey ----
Start location: ${this.startLocation}
End location: ${this.endLocation}
Distance: ${this.distance}
Vehicle type: ${VehicleType[this.vehicle.vehicleType]}
Travel costs: ${this.calculateTravelCosts()}`);
  }
}
