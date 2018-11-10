import {
  Bus,
  IRental,
  IVehicle,
  Rental
} from '../../models';
import { IUser } from '../../models/contracts/user';
import { User } from '../../models/users/user-model';
import { Car } from '../../models/vehicles/car-model';
import { Caravan } from '../../models/vehicles/caravan-model';
import { Motorcycle } from '../../models/vehicles/motorcycle-model';
import { IModels } from '../contracts/models-factory';

export class Models implements IModels {
  
  public createUser(userFirstName: string, userLastName: string, userAge: number, userType: number, userName: string): IUser {
    return new User(userFirstName, userLastName, userAge, userType, userName);
  }

  public createCar(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, topSpeed: number): IVehicle {
    return new Car(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, topSpeed);
  }

  public createMotorcycle(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, topSpeed: number): IVehicle {
    return new Motorcycle(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, topSpeed);
  }

  public createCaravan(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle {
    return new Caravan(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, livingArea, numberOfBeds, hasBathroom);
  }

  public createBus(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, busLength: number): IVehicle {
    return new Bus(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, busLength);
  }

  public createRental(userName: string,
    daysOfRental: number, vehicleId: IVehicle): IRental {
    return new Rental(userName, daysOfRental, vehicleId);
  }
}
