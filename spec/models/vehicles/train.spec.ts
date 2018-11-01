import { Train } from '../../../src/models';
import { IVehicle } from './../../../src/models/vehicles/contracts/vehicle';

describe('Train', () => {
  describe('constructor should', () => {
    it('throw when the passengerCapacity is less than 30', () => {
      // Arrange, Act & Assert
      expect(() => new Train(29, 1, 10)).toThrowError();
    });

    it('throw when the passengerCapacity is more than 150', () => {
      // Arrange, Act & Assert
      expect(() => new Train(151, 1, 10)).toThrowError();
    });

    it('throw when the pricePerKilometer is lower than 0.10', () => {
      // Arrange, Act & Assert
      expect(() => new Train(50, 0, 10)).toThrowError();
    });

    it('throw when the pricePerKilometer is higher than 2.50', () => {
      // Arrange, Act & Assert
      expect(() => new Train(50, 3, 10)).toThrowError();
    });

    it('throw when the carts are less than 1', () => {
      // Arrange, Act & Assert
      expect(() => new Train(29, 1, 0)).toThrowError();
    });

    it('throw when the passengerCapacity are more than 15', () => {
      // Arrange, Act & Assert
      expect(() => new Train(151, 1, 16)).toThrowError();
    });

    it('not throw when correct values are passed in the constructor', () => {
      // Arrange, Act & Assert
      expect(() => new Train(50, 1, 10)).not.toThrowError();
    });
  });

  describe('print should', () => {
    it('return a string that contains correct values', () => {
      // Arrange
      const train: IVehicle = new Train(50, 1, 10);

      // Act
      const trainInfo: string = train.print();

      // Assert
      expect(trainInfo).toContain('Train ----');
      expect(trainInfo).toContain('Passenger capacity: 50');
      expect(trainInfo).toContain('Price per kilometer: 1');
      expect(trainInfo).toContain('Vehicle type: Land');
      expect(trainInfo).toContain('Carts amount: 10');
    });
  });
});
