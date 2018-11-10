import { VehicleType } from '.';
import { ICar } from './contracts';
import { Vehicle } from './vehicle-model';

export class Car extends Vehicle implements ICar {
    private readonly _topSpeed: number;

    public constructor(passengerCapacity: number, pricePerDay: number, engine: string,
        color: string, transmissionType: string, state: string, brand: string, topSpeed: number) {
        super(passengerCapacity, pricePerDay, VehicleType.Car, engine, color, transmissionType, state, brand);
        this._topSpeed = topSpeed;
    }

    public get topSpeed(): number {
        return this._topSpeed;
    }

    public print(): string {
        return (
            `Car ----
    ${super.print()}
    Maximum speed of the car: ${this.topSpeed}`
        );
    }

    public validatePassengerCapacity(passengerCapacity: number): void {
        if (passengerCapacity < 0 || passengerCapacity > 12) {
            throw new Error(
                `A car cannot have less than 0 passengers or more than 12 passengers.`
            );
        }
    }
}
