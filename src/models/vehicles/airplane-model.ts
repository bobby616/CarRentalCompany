import { VehicleType } from './common/vehicle-type';
import { IAirplane } from './contracts/airplane';
import { Vehicle } from './vehicle-model';

export class Airplane extends Vehicle implements IAirplane {
  protected static _minCapacity: number = 40;

  protected static _maxCapacity: number = 100;

  private readonly _hasFreeFood: boolean;

  public constructor(
    passengerCapacity: number,
    pricePerKilometer: number,
    hasFreeFood: boolean
  ) {
    super(passengerCapacity, pricePerKilometer, VehicleType.Air);

    this._hasFreeFood = hasFreeFood;
  }

  public get hasFreeFood(): boolean {
    return this._hasFreeFood;
  }

  public print(): string {
    return (
      `Airplane ----
${super.print()}
Has free food: ${this.hasFreeFood.toString()}`
    );
  }

  // Override
  protected validatePassengerCapacity(passengerCapacity: number): void {
    if (passengerCapacity < Airplane._minCapacity || passengerCapacity > Airplane._maxCapacity) {
      throw new Error(
        `An airplane cannot have less than ${Airplane._minCapacity} passengers or more than ${Airplane._maxCapacity} passengers.`
      );
    }
  }
}
