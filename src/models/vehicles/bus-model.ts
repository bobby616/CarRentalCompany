import { VehicleType } from './common/vehicle-type';
import { IBus } from './contracts/bus';
import { Vehicle } from './vehicle-model';

export class Bus extends Vehicle implements IBus {
  private readonly _busLength: number;

  protected static _minCapacity: number = 10;

  protected static _maxCapacity: number = 50;

  public constructor(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: string, busLength: number) {
    super(passengerCapacity, pricePerKilometer, VehicleType.Bus, engine, color, transmissionType);
    this._busLength = busLength;
  }

  public get busLength(): number {
    return this._busLength;
  }

  public print(): string {
    return (
      `Bus ----
${super.print()} 
Length of the bus: ${this.busLength}`
    );
  }

  // Override
  validatePassengerCapacity(passengerCapacity: number): void {
    if (passengerCapacity < Bus._minCapacity || passengerCapacity > Bus._maxCapacity) {
      throw new Error(
        `A bus cannot have less than ${Bus._minCapacity} passengers or more than ${Bus._maxCapacity} passengers.`
      );
    }
  }
}
