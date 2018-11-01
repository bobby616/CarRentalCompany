import { Airplane } from '../../../src/models';
import { IVehicle } from './../../../src/models/vehicles/contracts/vehicle';

describe('Airplane', () => {
  describe('constructor should', () => {
    it('throw when the passengerCapacity is less than 40', () => {
      // Arrange, Act & Assert
      expect(() => new Airplane(39, 1, true)).toThrowError();
    });

    it('throw when the passengerCapacity is more than 100', () => {
      // Arrange, Act & Assert
      expect(() => new Airplane(101, 1, false)).toThrowError();
    });

    it('throw when the pricePerKilometer is lower than 0.10', () => {
      // Arrange, Act & Assert
      expect(() => new Airplane(50, 0, false)).toThrowError();
    });

    it('throw when the pricePerKilometer is higher than 2.50', () => {
      // Arrange, Act & Assert
      expect(() => new Airplane(50, 3, true)).toThrowError();
    });

    it('not throw when correct values are passed in the constructor', () => {
      // Arrange, Act & Assert
      expect(() => new Airplane(50, 1, true)).not.toThrowError();
    });
  });

  describe('print should', () => {
    it('return a string that contains correct values', () => {
      // Arrange
      const airplane: IVehicle = new Airplane(50, 1, true);

      // Act
      const airplaneInfo: string = airplane.print();

      // Assert
      expect(airplaneInfo).toContain('Airplane ----');
      expect(airplaneInfo).toContain('Passenger capacity: 50');
      expect(airplaneInfo).toContain('Price per kilometer: 1');
      expect(airplaneInfo).toContain('Vehicle type: Air');
      expect(airplaneInfo).toContain('Has free food: true');
    });
  });
});
