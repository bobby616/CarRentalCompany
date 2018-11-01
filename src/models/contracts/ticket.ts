import { IJourney } from './journey';

export interface ITicket {
  journey: IJourney;
  administrativeCosts: number;
  calculatePrice(): number;
  print(): string;
}
