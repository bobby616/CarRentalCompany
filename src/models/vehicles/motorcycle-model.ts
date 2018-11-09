import { VehicleType } from '.';
import { IMotor } from './contracts';
import { Vehicle } from './vehicle-model';

export class Motorcycle extends Vehicle implements IMotor {
    private readonly _topSpeed: number;

    public constructor(passengerCapacity: number, pricePerDay: number, engine: string,
        color: string, transmissionType: string, brand: string, topSpeed: number) {
        super(passengerCapacity, pricePerDay, VehicleType.Motorcycle, engine,
            color, transmissionType, brand);
        this._topSpeed = topSpeed;
    }

    public get topSpeed(): number {
        return this._topSpeed;
    }

    public print(): string {
        return (
            `Motorcycle----
    ${super.print()} Maximum speed of the motorcycle: ${this.topSpeed}`
        );
    }

    public validatePassengerCapacity (passengerCapacity: number): void {
        if (passengerCapacity < 0 || passengerCapacity > 4) {
            throw new Error(
                `A motorcycle cannot have less than 0 passengers or more than 4 passengers.`
            );
        }
    }

}
