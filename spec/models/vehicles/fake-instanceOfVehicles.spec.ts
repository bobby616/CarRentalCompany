import { Vehicle, IVehicle, VehicleType } from "../../../src/models";

export class FakeClass extends Vehicle implements IVehicle {
    protected static _minCapacity: number = 1;

    protected static _maxCapacity: number = 800;

    constructor(passengerCapacity: number,
        pricePerDay: number,
        engine: string,
        color: string,
        transmissionType: string,
        state: string,
        brand: string) {
        super(passengerCapacity, pricePerDay, VehicleType.Bus, engine, color, transmissionType, state, brand);
    }

    public print(): string {
        return (
            `Passenger capacity: ${this.passengerCapacity}
  Rental price per day: ${this.pricePerDay}
  Vehicle type: ${VehicleType[this.vehicleType]}`
        );
    }

    validatepricePerDay(pricePerDay: number): void {
        if (pricePerDay < Vehicle._minPrice || pricePerDay > Vehicle._maxPrice) {
            throw new Error(
                `A price per kilometer on a vehicle cannot be ${Vehicle._minPrice} leva or more than ${Vehicle._maxPrice} leva.`
            );
        }
    }

    validateEngine(engine: string): void {
        if (engine.length <= 0 || engine.length > 1000) {
            throw new Error(
                `Invalid engine name`
            );
        }
    }

    validateTransmissionType(transmissionType: string): void {
        if (transmissionType.length <= 0 || transmissionType.length > 1000) {
            throw new Error(
                `Invalid transmission type `
            );
        }
    }

     validatePassengerCapacity(passengerCapacity: number): void {
        if (passengerCapacity < FakeClass._minCapacity || passengerCapacity > FakeClass._maxCapacity) {
            throw new Error(
                `The passanger capacity is invalid.`
            );
        }
    }

}