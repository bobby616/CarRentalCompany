import { VehicleType } from './common/vehicle-type';
import { IVehicle } from './contracts/vehicle';
import { TransmissionType } from './common/transmission-type';

export abstract class Vehicle implements IVehicle {
  
  protected static _minCapacity: number = 1;

  protected static _maxCapacity: number = 800;

  protected static _minPrice: number = 0.1;

  protected static _maxPrice: number = 2.5;

  private readonly _passengerCapacity: number;

  private readonly _pricePerKilometer: number;

  private readonly _vehicleType: VehicleType;

  private readonly _engine: string;

  private readonly _color: string;

  private readonly _transmissionType: TransmissionType;

  public constructor(
    passengerCapacity: number,
    pricePerKilometer: number,
    vehicleType: VehicleType,
    engine: string,
    color: string,
    transmissionType: TransmissionType,
  ) {
    //validations 

    this.validatePricePerKilometer(pricePerKilometer);
    /* this.validatePassengerCapacity(passengerCapacity); */
    this.validateEngine(engine);

    this._passengerCapacity = passengerCapacity;
    this._pricePerKilometer = pricePerKilometer;
    this._vehicleType = vehicleType;
    this._engine = engine;
    this._color = color;
    this._transmissionType = transmissionType;
  }

  public get passengerCapacity(): number {
    return this._passengerCapacity;
  }
  public get pricePerKilometer(): number {
    return this._pricePerKilometer;
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
  public get transmissionType(): TransmissionType {
    return this._transmissionType;
  }

  public print(): string {
    return (
      `Passenger capacity: ${this.passengerCapacity}
Price per kilometer: ${this.pricePerKilometer}
Vehicle type: ${VehicleType[this.vehicleType]}`
    );
  }

  abstract validatePassengerCapacity(passengerCapacity: number): void;

  protected validatePricePerKilometer(pricePerKilometer: number): void {
    if (pricePerKilometer < Vehicle._minPrice || pricePerKilometer > Vehicle._maxPrice) {
      throw new Error(
        `A price per kilometer on a vehicle cannot be ${Vehicle._minPrice} leva or more than ${Vehicle._maxPrice} leva.`
      );
    }
  }

  protected validateEngine(engine: string): void {
    if (engine.length < 0 || engine.length > 1000) {
      throw new Error(
        `Invalid engine name`
      );
    }
  }
}
