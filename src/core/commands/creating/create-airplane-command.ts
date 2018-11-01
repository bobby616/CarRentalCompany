import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';
import { IVehicle } from './../../../models/vehicles/contracts/vehicle';
export class CreateAirplane implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [passengerCapacity, pricePerKilometer, hasFreeFood] = parameters;

    if (isNaN(+passengerCapacity) || isNaN(+pricePerKilometer) || (hasFreeFood !== 'true' && hasFreeFood !== 'false')) {
      throw new Error('Failed to parse CreateAirplane command parameters.');
    }

    const airplane: IVehicle = this._factory.createAirplane(+passengerCapacity, +pricePerKilometer, Boolean(hasFreeFood));

    this._travelDatabase.vehicles.push(airplane);

    return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
  }
}
