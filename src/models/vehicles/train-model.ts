import { VehicleType } from './common/vehicle-type';
import { ITrain } from './contracts/train';
import { Vehicle } from './vehicle-model';

export class Train extends Vehicle implements ITrain {

  protected static _minCapacity: number = 30;

  protected static _maxCapacity: number = 150;

  private readonly _minCarts: number = 1;

  private readonly _maxCarts: number = 15;

  private readonly _carts: number;

  public constructor(
    passengerCapacity: number,
    pricePerKilometer: number,
    carts: number
  ) {
    super(passengerCapacity, pricePerKilometer, VehicleType.Land);

    if (carts < this._minCarts || carts > this._maxCarts) {
      throw new Error(`A train cannot have less than ${this._minCarts} cart or more than ${this._maxCarts} carts.`);
    }

    this._carts = carts;
  }

  public get carts(): number {
    return this._carts;
  }

  public print(): string {
    return (
      `Train ----
${super.print()}
Carts amount: ${this.carts}`
    );
  }

  // Override
  protected validatePassengerCapacity(passengerCapacity: number): void {
    if (passengerCapacity < Train._minCapacity || passengerCapacity > Train._maxCapacity) {
      throw new Error(`A train cannot have less than ${Train._minCapacity} passengers or more than ${Train._maxCapacity} passengers.`);
    }
  }
}
