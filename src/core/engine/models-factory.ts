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

  createCar(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string,
    transmissionType: string, topSpeed: number): IVehicle {
    return new Car(passengerCapacity, pricePerKilometer, engine, color, transmissionType, topSpeed);
  }
  createMotorcycle(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string,
    transmissionType: string, topSpeed: number): IVehicle {
    return new Motorcycle(passengerCapacity, pricePerKilometer, engine, color, transmissionType, topSpeed);
  }
  createCaravan(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string,
    transmissionType: string, livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle {
    return new Caravan(passengerCapacity, pricePerKilometer, engine, color, transmissionType, livingArea, numberOfBeds, hasBathroom);
  }
  createBus(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string,
    transmissionType: string, busLength: number): IVehicle {
    return new Bus(passengerCapacity, pricePerKilometer, engine, color, transmissionType, busLength);
  }
  createRental(clientFirstName: string, clientLastName: string, 
    daysOfRental: number, vehicleId: IVehicle): IRental{
      return new Rental(clientFirstName, clientLastName, daysOfRental, vehicleId)
    }
}
