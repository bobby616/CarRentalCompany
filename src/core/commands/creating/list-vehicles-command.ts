import { inject, injectable } from 'inversify';
import { IVehicle } from '../../../models';
import { IUser } from '../../../models/contracts/user';
import { TYPES } from '../../common/types';
import { IModels, ITravelDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Availability } from './../../../models/vehicles/common/availability';

@injectable()
export class ListVehicles implements ICommand {
  private _travelDatabase: ITravelDatabase;

  constructor(@inject(TYPES.data) data: ITravelDatabase) {
    this._travelDatabase = data;
  }

  public execute(parameters: string[]): string {
    const [userName] = parameters;
    if (this._travelDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
      throw new Error('THERE IS NO SUCH USER!!');
  }

    if (this._travelDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
    return `${
      this._travelDatabase.vehicles.length === 0
        ? 'There are no registered vehicles.'
        : `Vehicles:
${this._travelDatabase.vehicles
        .map((vehicle: IVehicle) => vehicle.print())
        .join('\n')}\n####################`
      }`;
    } else {
      return `${
        this._travelDatabase.vehicles.length === 0
          ? 'There are no registered vehicles.'
          : `Vehicles:
${this._travelDatabase.vehicles
          .filter((veh: IVehicle) => veh.state === Availability.Available)
          .map((vehicle: IVehicle) => vehicle.print())
          .join('\n')}\n####################`
        }`;
    }

  }
}
