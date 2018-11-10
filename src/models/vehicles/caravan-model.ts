import { VehicleType } from '.';
import { ICaravan } from './contracts';
import { Vehicle } from './vehicle-model';

export class Caravan extends Vehicle implements ICaravan {
    public _livingArea: number;
    public _numberOfBeds: number;
    public _hasBathroom: boolean;

    public constructor(passengerCapacity: number, pricePerDay: number, engine: string,
        color: string, transmissionType: string, state: string, brand: string,  livingArea: number, numberOfBeds: number,
        hasBathroom: boolean) {
        super(passengerCapacity, pricePerDay, VehicleType.Caravan, engine, color,
            transmissionType, state, brand);
        this._livingArea = livingArea;
        this._numberOfBeds = numberOfBeds;
        this._hasBathroom = hasBathroom;
    }

    public get livingArea(): number {
        return this._livingArea;
    }
    public get numberOfBeds(): number {
        return this._numberOfBeds;
    }
    public get hasBathroom(): boolean {
        return this._hasBathroom;
    }

    public print(): string {
        return (
     `Caravan----
    ${super.print()}
    Living area: ${this.livingArea}
    Number of beds: ${this.numberOfBeds}
    Has bathroom: ${this.hasBathroom}`
        );
    }

    public validatePassengerCapacity(passengerCapacity: number): void {
        if (passengerCapacity < 0 || passengerCapacity > 25) {
            throw new Error(
                `A caravan cannot have less than 0 passengers or more than 25 passengers.`
            );
        }
    }

}
