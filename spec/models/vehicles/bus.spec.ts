import { Bus } from '../../../src/models';
import { IVehicle } from './../../../src/models/vehicles/contracts/vehicle';

describe('Bus', () => {
  describe('constructor should', () => {
    it('throw when the passengerCapacity is less than 10', () => {
      // Arrange, Act & Assert
      expect(() => new Bus(5, 1)).toThrowError();
    });

    it('throw when the passengerCapacity is more than 50', () => {
      // Arrange, Act & Assert
      expect(() => new Bus(55, 1)).toThrowError();
    });

    it('throw when the pricePerKilometer is lower than 0.10', () => {
      // Arrange, Act & Assert
      expect(() => new Bus(20, 0)).toThrowError();
    });

    it('throw when the pricePerKilometer is higher than 2.50', () => {
      // Arrange, Act & Assert
      expect(() => new Bus(20, 3)).toThrowError();
    });

    it('not throw when correct values are passed in the constructor', () => {
      // Arrange, Act & Assert
      expect(() => new Bus(20, 1)).not.toThrowError();
    });
  });

  describe('print should', () => {
    it('return a string that contains correct values', () => {
      // Arrange
      const bus: IVehicle = new Bus(20, 1);

      // Act
      const busInfo: string = bus.print();

      // Assert
      expect(busInfo).toContain('Bus ----');
      expect(busInfo).toContain('Passenger capacity: 20');
      expect(busInfo).toContain('Price per kilometer: 1');
      expect(busInfo).toContain('Vehicle type: Land');
    });
  });
});
