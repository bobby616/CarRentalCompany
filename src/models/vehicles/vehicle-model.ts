import { Availability } from './common/availability';
import { VehicleType } from './common/vehicle-type';
import { IVehicle } from './contracts/vehicle';

export abstract class Vehicle implements IVehicle {

  public get state(): Availability {
    return this._state;
  }

  public set state(val: Availability) {
      this._state = val;
  }

  private readonly _brand: string;

  private readonly _passengerCapacity: number;

  private readonly _pricePerDay: number;

  private readonly _vehicleType: VehicleType;

  private readonly _engine: string;

  private readonly _color: string;

  private readonly _transmissionType: string;

  private _state: Availability = Availability.Available;


  protected static _minCapacity: number = 1;

  protected static _maxCapacity: number = 800;

  protected static _minPrice: number = 0.1;

  protected static _maxPrice: number = 500;

  public constructor(
    passengerCapacity: number,
    pricePerDay: number,
    vehicleType: VehicleType,
    engine: string,
    color: string,
    transmissionType: string,
    brand: string
  ) {

    this.validatepricePerDay(pricePerDay);
    this.validatePassengerCapacity(passengerCapacity);
    this.validateTransmissionType(transmissionType);
    this.validateEngine(engine);

    this._passengerCapacity = passengerCapacity;
    this._pricePerDay = pricePerDay;
    this._vehicleType = vehicleType;
    this._engine = engine;
    this._color = color;
    this._transmissionType = transmissionType;
    this._brand = brand;
  }

  public get passengerCapacity(): number {
    return this._passengerCapacity;
  }
  public get pricePerDay(): number {
    return this._pricePerDay;
  }

  public get brand(): string {
    return this._brand;
  }

  public get vehicleType(): VehicleType {
    return this._vehicleType;
  }
  public get engine(): string {
    return this._engine;
  }
  public get color(): string {
    return this._color;
  }
  public get transmissionType(): string {
    return this._transmissionType;
  }

  public print(): string {
    return (
      `Passenger capacity: ${this.passengerCapacity}
    Rental price per day: ${this.pricePerDay}
    Vehicle type: ${VehicleType[this.vehicleType]}
    Availability: ${Availability[this._state]}`
    );
  }

  public abstract validatePassengerCapacity(passengerCapacity: number): void;

  protected validatepricePerDay(pricePerDay: number): void {
    if (pricePerDay < Vehicle._minPrice || pricePerDay > Vehicle._maxPrice) {
      throw new Error(
        `A price per kilometer on a vehicle cannot be ${Vehicle._minPrice} leva or more than ${Vehicle._maxPrice} leva.`
      );
    }
  }

  protected validateEngine(engine: string): void {
    if (engine.length <= 0 || engine.length > 1000) {
      throw new Error(
        `Invalid engine name`
      );
    }
  }

  protected validateTransmissionType(transmissionType: string): void {
    if (transmissionType.length <= 0 || transmissionType.length > 1000) {
      throw new Error(
        `Invalid transmission type `
      );
    }
  }
}
