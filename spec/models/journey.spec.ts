import { Journey } from '../../src/models/journey-model';
import { vehicleFactory } from '../utils';
import { IJourney } from './../../src/models/contracts/journey';

describe('Journey', () => {
  describe('constructor should', () => {
    it('throw when the startLocation\'s length is less than 5', () => {
      // Arrange, Act & Assert
      expect(
        () => new Journey('inv', 'valid location', 20, vehicleFactory.build())
      ).toThrowError();
    });

    it('throw when the startLocation\'s length is more than 25', () => {
      // Arrange, Act & Assert
      expect(
        () =>
          new Journey(
            'a'.repeat(30),
            'valid location',
            20,
            vehicleFactory.build()
          )
      ).toThrowError();
    });

    it('throw when the endLocation\'s length is less than 5', () => {
      // Arrange, Act & Assert
      expect(
        () => new Journey('valid location', 'inv', 20, vehicleFactory.build())
      ).toThrowError();
    });

    it('throw when the endLocation\'s length is more than 25', () => {
      // Arrange, Act & Assert
      expect(
        () =>
          new Journey(
            'valid location',
            'a'.repeat(30),
            20,
            vehicleFactory.build()
          )
      ).toThrowError();
    });

    it('throw when the distance is less than 5', () => {
      // Arrange, Act & Assert
      expect(
        () =>
          new Journey(
            'valid location',
            'valid location',
            3,
            vehicleFactory.build()
          )
      ).toThrowError();
    });

    it('throw when the distance is more than 5000', () => {
      // Arrange, Act & Assert
      expect(
        () =>
          new Journey(
            'valid location',
            'valid location',
            5500,
            vehicleFactory.build()
          )
      ).toThrowError();
    });

    it('not throw when correct values are passed in the constructor', () => {
      // Arrange, Act & Assert
      expect(
        () =>
          new Journey(
            'valid location',
            'valid location',
            20,
            vehicleFactory.build()
          )
      ).not.toThrowError();
    });
  });

  describe('calculateTravelCosts should', () => {
    it('calculate correctly if correct values are passed to the constructor', () => {
      // Arrange
      const journey: IJourney = new Journey(
        'valid location',
        'valid location',
        20,
        vehicleFactory.build()
      );

      // Act
      const costs: number = journey.calculateTravelCosts();

      // Assert
      expect(costs).toBe(20);
    });
  });

  describe('print should', () => {
    it('return a string that contains correct values', () => {
      // Arrange
      const journey: IJourney = new Journey(
        'valid location',
        'valid location',
        20,
        vehicleFactory.build()
      );

      // Act
      const journeyInfo: string = journey.print();

      // Assert
      expect(journeyInfo).toContain('Journey ----');
      expect(journeyInfo).toContain('Start location: valid location');
      expect(journeyInfo).toContain('End location: valid location');
      expect(journeyInfo).toContain('Distance: 20');
      expect(journeyInfo).toContain('Vehicle type: Sea');
      expect(journeyInfo).toContain('Travel costs: 20');
    });
  });
});
