import { IVehicle } from '../../../models';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { IAgencyFactory, ITravelDatabase } from './../../contracts';
import { TravelDatabase } from './../../travel-database';
export class CreateBus implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [passengerCapacity, pricePerKilometer] = parameters;
    if (isNaN(+passengerCapacity) || isNaN(+pricePerKilometer)) {
      throw new Error('Failed to parse CreateBus command parameters.');
    }

    const bus: IVehicle = this._factory.createBus(+passengerCapacity, +pricePerKilometer);

    this._travelDatabase.vehicles.push(bus);

    return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
  }
}
