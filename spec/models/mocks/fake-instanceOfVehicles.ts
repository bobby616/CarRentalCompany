import { IVehicle, Vehicle, VehicleType } from '../../../src/models';

export class FakeClass extends Vehicle implements IVehicle {
    protected static _minCapacity: number = 1;

    protected static _maxCapacity: number = 800;

    constructor(passengerCapacity: number,
        pricePerDay: number,
        engine: string,
        color: string,
        transmissionType: string,
        brand: string) {
        super(passengerCapacity, pricePerDay, VehicleType.Bus, engine, color, transmissionType, brand);
    }

    public print(): string {
        return (
            `Passenger capacity: ${this.passengerCapacity}
  Rental price per day: ${this.pricePerDay}
  Vehicle type: ${VehicleType[this.vehicleType]}`
        );
    }

    public validatePassengerCapacity(passengerCapacity: number): void {
        if (passengerCapacity < FakeClass._minCapacity || passengerCapacity > FakeClass._maxCapacity) {
            throw new Error('The passanger capacity is invalid.');
        }
    }

}
