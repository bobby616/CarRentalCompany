import { IVehicle } from '../../../models';
import { IUser } from '../../../models/contracts/user';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { UserDatabase } from '../../user-database';
import { IModels, ITravelDatabase, IUserDatabase } from './../../contracts';
import { TravelDatabase } from './../../travel-database';
export class CreateBus implements ICommand {

  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;
  private _userDatabase: IUserDatabase;

  constructor() {
    this._factory = new Models();
    this._travelDatabase = TravelDatabase.INSTANCE;
    this._userDatabase = UserDatabase.INSTANCE;
  }

  public execute(parameters: string[]): string {
    const [passengerCapacity, userName, pricePerDay, engine, color, transmissionType, state, brand, busLength] = parameters;
    if (isNaN(+passengerCapacity) || isNaN(+pricePerDay) || (engine.length <= 0) ||
      (color.length <= 0) || !(transmissionType.localeCompare('Automatic') ||
        transmissionType.localeCompare('Manual')) || (state.length <= 0) || (brand.length <= 0) || isNaN(+busLength)) {
      throw new Error('Failed to parse CreateBus command parameters.');
    }
    if (this._userDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
      throw new Error('Failed to parse CreateUser command parameters. CUSTOM');
    }

    const bus: IVehicle = this._factory.createBus(+passengerCapacity, +pricePerDay, engine,
      color, transmissionType, state, brand, +busLength);

    this._travelDatabase.vehicles.push(bus);

    return `Vehicle with ID ${this._travelDatabase.vehicles.length - 1} was created.`;
  }
}
