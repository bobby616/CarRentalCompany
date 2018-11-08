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
