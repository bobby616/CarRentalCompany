import { Vehicle } from "./vehicle-model";
import { ICar } from "./contracts";
import { VehicleType } from ".";


export class Car extends Vehicle implements ICar {
    private readonly _topSpeed: number;

    public constructor(passengerCapacity: number, pricePerDay: number, engine: string,
        color: string, transmissionType: string, brand: string, topSpeed: number) {
        super(passengerCapacity, pricePerDay, VehicleType.Car, engine, color, transmissionType, brand);
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

    validatePassengerCapacity(passengerCapacity: number): void {
        if (passengerCapacity < 0 || passengerCapacity > 12) {
            throw new Error(
                `A car cannot have less than 0 passengers or more than 12 passengers.`
            );
        }
    }
}