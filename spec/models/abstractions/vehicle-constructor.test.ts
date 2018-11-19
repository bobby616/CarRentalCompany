import { Bus, IVehicle, VehicleType } from '../../../src/models';
import { Car } from '../../../src/models/vehicles/car-model';
import { Caravan } from '../../../src/models/vehicles/caravan-model';
import { Availability } from '../../../src/models/vehicles/common/availability';
import { Motorcycle } from '../../../src/models/vehicles/motorcycle-model';
import { FakeClass } from '../mocks/fake-instanceOfVehicles';

describe('Vehicle', () => {
    describe('Constructor should', () => {
        it('throw when passanger capacity is below 1 and over 800', () => {
            // Arrange Act&Assert
            expect(() => new FakeClass(-123123, 10, 'engine', 'color', 'transmissionType', 'brand')).toThrowError();
            expect(() => new FakeClass(900, 10, 'engine', 'color', 'transmissionType', 'brand')).toThrowError();
        });

        it('throw when price is below 0.1 and over 500', () => {
            // Arrange Act&Assert
            expect(() => new FakeClass(10, 0, 'engine', 'color', 'transmissionType', 'brand')).toThrowError();
            expect(() => new FakeClass(10, 5001, 'engine', 'color', 'transmissionType', 'brand')).toThrowError();
        });

        it('throw when TRANSMISSION is invalid', () => {
            // Arrange Act&Assert
            expect(() => new FakeClass(10, 123, 'engine', 'color', '', 'brand')).toThrow('Invalid transmission type');
        });

        it('throw when ENGINE string is invalid', () => {
            // Arrange Act&Assert
            expect(() => new FakeClass(10, 123, '', 'color', 'transmission', 'brand')).toThrowError();
        });

    });

    describe('Print should', () => {
        it('return a string that contains correct values for Bus', () => {
            // Assert
            const bus: IVehicle = new Bus(30, 100, 'engine', 'color', 'Manual', 'brand', 11);

            // Act
            const info: string = bus.print();

            // Assert
            expect(info).toContain(`Bus ----`);
            expect(info).toContain(`Passenger capacity: 30`);
            expect(info).toContain(`Rental price per day: 100`);
            expect(info).toContain(`Vehicle type: ${VehicleType.Bus}`);
            expect(info).toContain(`Availability: ${Availability.Available}`);
            expect(info).toContain(`Length of the bus: 11`);

        });
    });

    it('return a string that contains correct values for Car', () => {
        // Assert
        const car: IVehicle = new Car(10, 100, 'engine', 'color', 'Manual', 'CarBrand', 200);

        // Act
        const info: string = car.print();

        // Assert
        expect(info).toContain(`Car ----`);
        expect(info).toContain(`Passenger capacity: 10`);
        expect(info).toContain(`Rental price per day: 100`);
        expect(info).toContain(`Vehicle type: ${VehicleType.Car}`);
        expect(info).toContain(`Availability: ${Availability.Available}`);
        expect(info).toContain(`Maximum speed of the car: 200`);
    });

    it('return a string that contains correct values for MotorCycle', () => {
        // Assert
        const motor: IVehicle = new Motorcycle(3, 100, 'engine', 'color', 'Manual', 'CarBrand', 200);

        // Act
        const info: string = motor.print();

        // Assert
        expect(info).toContain(`Motorcycle----`);
        expect(info).toContain(`Passenger capacity: 3`);
        expect(info).toContain(`Rental price per day: 100`);
        expect(info).toContain(`Vehicle type: ${VehicleType.Motorcycle}`);
        expect(info).toContain(`Availability: ${Availability.Available}`);
        expect(info).toContain(`Maximum speed of the motorcycle: 200`);
    });

    it('return a string that contains correct values for Caravan', () => {
        // Assert
        const caravan: IVehicle = new Caravan(22, 100, 'engine', 'color', 'Manual', 'brand', 35, 2, true);

        // Act
        const info: string = caravan.print();

        // Assert
        expect(info).toContain(`Caravan----`);
        expect(info).toContain(`Passenger capacity: 22`);
        expect(info).toContain(`Rental price per day: 100`);
        expect(info).toContain(`Vehicle type: ${VehicleType.Caravan}`);
        expect(info).toContain(`Availability: ${Availability.Available}`);
        expect(info).toContain(`Living area: 35`);
        expect(info).toContain(`Number of beds: 2`);
        expect(info).toContain(`Has bathroom: true`);
    });

});
