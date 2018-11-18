import { inject, injectable } from 'inversify';
import { IVehicle } from '../../../models';
import { IUser } from '../../../models/contracts/user';
import { TYPES } from '../../common/types';
import { ICommand } from '../../contracts/command';
import { IModels, ITravelDatabase } from './../../contracts';

@injectable()
export class CreateCaravan implements ICommand {
  public static _countCaravans: number = 0;
  private _factory: IModels;
  private _travelDatabase: ITravelDatabase;

  constructor(@inject(TYPES.data) data: ITravelDatabase,
    @inject(TYPES.models) factory: IModels) {
    this._factory = factory;
    this._travelDatabase = data;
    CreateCaravan._countCaravans += 1;
  }

  public execute(parameters: string[]): string {
    const [userName, passengerCapacity, pricePerDay, engine, color, transmissionType
      , brand, livingArea, numberOfBeds, hasBathroom] = parameters;

    if (isNaN(+passengerCapacity) || isNaN(+pricePerDay) || engine.length <= 0 ||
      color.length <= 0 || !(transmissionType === 'Automatic' || transmissionType === 'Manual')|| brand.length <= 0 || isNaN(+livingArea) || isNaN(+numberOfBeds)
      || hasBathroom !== ('true' || 'false')) {
      throw new Error('Failed to parse CreateCaravan command parameters.');
    }
    if (this._travelDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
      throw new Error('THERE IS NO SUCH USER');
    }
    if (this._travelDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
      throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
    }

    const caravan: IVehicle = this._factory.createCaravan(+passengerCapacity, +pricePerDay, engine,
      color, transmissionType, brand, +livingArea, +numberOfBeds, Boolean(hasBathroom));

    this._travelDatabase.vehicles.push(caravan);

    return `Caravan with ID ${CreateCaravan._countCaravans} was created.`;
  }
}
