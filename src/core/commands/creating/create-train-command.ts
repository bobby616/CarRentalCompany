import { IAgencyFactory, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { AgencyFactory } from '../../engine/travel-agency-factory';
import { TravelDatabase } from '../../travel-database';
import { IVehicle } from './../../../models/vehicles/contracts/vehicle';
export class CreateTrain implements ICommand {

  private _factory: IAgencyFactory;
  private _travelDatabase: ITravelDatabase;

  constructor() {
    this._factory = new AgencyFactory();
    this._travelDatabase = TravelDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [passengerCapacity, pricePerKilometer, carts] = parameters;

    if (isNaN(+passengerCapacity) || isNaN(+pricePerKilometer) || isNaN(+carts)) {
      throw new Error('Failed to parse CreateTrain command parameters.');
    }

    const train: IVehicle = this._factory.createTrain(+passengerCapacity, +pricePerKilometer, +carts);

    this._travelDatabase.vehicles.push(train);

    return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
  }
}
