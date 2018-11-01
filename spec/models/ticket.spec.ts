import { Ticket } from '../../src/models/ticket-model';
import { journeyFactory } from '../utils';
import { ITicket } from './../../src/models/contracts/ticket';

describe('Ticket', () => {
  describe('constructor should', () => {
    it('throw when the administrativeCosts are less than 0', () => {
      // Arrange, Act & Assert
      expect(() => new Ticket(journeyFactory.build(), -1)).toThrowError();
    });

    it('throw when the administrativeCosts are more than 10000', () => {
      // Arrange, Act & Assert
      expect(() => new Ticket(journeyFactory.build(), 10001)).toThrowError();
    });

    it('not throw when correct values are passed in the constructor', () => {
      // Arrange, Act & Assert
      expect(() => new Ticket(journeyFactory.build(), 100)).not.toThrowError();
    });
  });

  describe('calculatePrice should', () => {
    it('calculate correctly if correct values are passed to the constructor', () => {
      // Arrange
      const ticket: ITicket = new Ticket(journeyFactory.build(), 100);

      // Act
      const price: number = ticket.calculatePrice();

      // Assert
      expect(price).toBe(120);
    });
  });

  describe('print should', () => {
    it('return a string that contains correct values', () => {
      // Arrange
      const ticket: ITicket = new Ticket(journeyFactory.build(), 100);

      // Act
      const ticketInfo: string = ticket.print();

      // Assert
      expect(ticketInfo).toContain('Ticket ----');
      expect(ticketInfo).toContain('Destination: V Turnovo');
      expect(ticketInfo).toContain('Price: 120');
    });
  });
});
