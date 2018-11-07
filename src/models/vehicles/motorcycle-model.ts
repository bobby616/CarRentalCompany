import { Vehicle } from "./vehicle-model";
import { IMotor } from "./contracts";
import { VehicleType } from ".";


export class Motorcycle extends Vehicle implements IMotor{
    private readonly _topSpeed: number;

    public constructor(passengerCapacity: number, pricePerKilometer: number, engine: string,
        color: string, transmissionType: string, topSpeed: number) {
        super(passengerCapacity, pricePerKilometer, VehicleType.Motorcycle, engine, color, transmissionType);
        this._topSpeed = topSpeed;
    }

    public get topSpeed(): number {
        return this._topSpeed;
    }

    public print(): string {
        return (
            `Motorcycle----
    ${super.print()} 
    Maximum speed of the motorcycle: ${this.topSpeed}`
        );
    }

    validatePassengerCapacity(passengerCapacity: number): void {
        if (passengerCapacity < 0 || passengerCapacity > 4) {
            throw new Error(
                `A motorcycle cannot have less than 0 passengers or more than 4 passengers.`
            );
        }
    }

}