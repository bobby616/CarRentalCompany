import { IJourney } from './contracts/journey';
import { ITicket } from './contracts/ticket';

export class Ticket implements ITicket {
  private readonly _journey: IJourney;

  private readonly _administrativeCosts: number;

  private readonly _minAdministrativeCosts: number = 0;

  private readonly _maxAdministrativeCosts: number = 10000;

  public constructor(journey: IJourney, administrativeCosts: number) {
    if (administrativeCosts < this._minAdministrativeCosts || administrativeCosts > this._maxAdministrativeCosts) {
      // tslint:disable-next-line:max-line-length
      throw new Error(`The administrativeCosts cannot be less than $${this._minAdministrativeCosts} or more that $${this._maxAdministrativeCosts}.`);
    }

    this._journey = journey;
    this._administrativeCosts = administrativeCosts;
  }

  public get journey(): IJourney {
    return this._journey;
  }

  public get administrativeCosts(): number {
    return this._administrativeCosts;
  }

  public calculatePrice(): number {
    return this.administrativeCosts + this.journey.calculateTravelCosts();
  }

  public print(): string {
    return (
      `Ticket ----
Destination: ${this.journey.endLocation}
Price: ${this.calculatePrice()}`);
  }
}
