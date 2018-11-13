import { VehicleType } from './common/vehicle-type';
import { IBus } from './contracts/bus';
import { Vehicle } from './vehicle-model';

export class Bus extends Vehicle implements IBus {

  public get busLength(): number {
    return this._busLength;
  }

  protected static _minCapacity: number = 10;

  protected static _maxCapacity: number = 50;
  
  private readonly _busLength: number;

  public constructor(passengerCapacity: number, pricePerDay: number, engine: string,
    color: string, transmissionType: string, brand: string, busLength: number) {
    super(passengerCapacity, pricePerDay, VehicleType.Bus, engine, color, transmissionType, brand);
    this._busLength = busLength;
  }

  public print(): string {
    return (
      `Bus ----
${super.print()}
Length of the bus: ${this.busLength}`
    );
  }

  // Override
  public validatePassengerCapacity(passengerCapacity: number): void {
    if (passengerCapacity < Bus._minCapacity || passengerCapacity > Bus._maxCapacity) {
      throw new Error(
        `A bus cannot have less than ${Bus._minCapacity} passengers or more than ${Bus._maxCapacity} passengers.`
      );
    }
  }
}
