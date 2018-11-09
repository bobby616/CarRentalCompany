<<<<<<< HEAD
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
import { UserType } from '../../models/vehicles/common/user-type';
import { Motorcycle } from '../../models/vehicles/motorcycle-model';
import { IModels } from '../contracts/models-factory';
import { User } from './../../models/users/user-model';
import { CreateUser } from './../commands/creating/create-user-command';

export class Models implements IModels {

  public createUser(userFirstName: string, userLastName: string, userAge: number, userType: UserType): IUser {
    return new User(userFirstName, userLastName, userAge, UserType.Client);
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
  public createRental(clientFirstName: string, clientLastName: string,
    daysOfRental: number, vehicleId: IVehicle): IRental {
    return new Rental(clientFirstName, clientLastName, daysOfRental, vehicleId);
  }
}
=======
import {
  Bus,
  IVehicle,
  IRental,
  Rental,
} from '../../models';
import { IModels } from '../contracts/models-factory';
import { Car } from '../../models/vehicles/car-model';
import { Motorcycle } from '../../models/vehicles/motorcycle-model';
import { Caravan } from '../../models/vehicles/caravan-model';

export class Models implements IModels {

  createCar(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, topSpeed: number): IVehicle {
    return new Car(passengerCapacity, pricePerDay, engine, color, transmissionType,brand,topSpeed);
  }
  createMotorcycle(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, topSpeed: number): IVehicle {
    return new Motorcycle(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, topSpeed);
  }
  createCaravan(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string,livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle {
    return new Caravan(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, livingArea, numberOfBeds, hasBathroom);
  }
  createBus(passengerCapacity: number, pricePerDay: number, engine: string, color: string,
    transmissionType: string, brand: string, busLength: number): IVehicle {
    return new Bus(passengerCapacity, pricePerDay, engine, color, transmissionType, brand, busLength);
  }
  createRental(clientFirstName: string, clientLastName: string, 
    daysOfRental: number, vehicleId: IVehicle): IRental{
      return new Rental(clientFirstName, clientLastName, daysOfRental, vehicleId);
    }
    
}
>>>>>>> 0a275ad4ab905694276c05c844f866cb1e30578d
