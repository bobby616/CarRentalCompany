import {
  Bus,
  IVehicle,
} from '../../models';
import { IModels } from '../contracts/models-factory';
import { TransmissionType } from '../../models/vehicles/common/transmission-type';
import { Car } from '../../models/vehicles/car-model';
import { Motorcycle } from '../../models/vehicles/motorcycle-model';
import { Caravan } from '../../models/vehicles/caravan-model';

export class Models implements IModels {

  createCar(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, topSpeed: number): IVehicle {
    return new Car(passengerCapacity, pricePerKilometer, engine, color, TransmissionType.Manual, topSpeed);
  }
  createMotorcycle(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, topSpeed: number): IVehicle {
    return new Motorcycle(passengerCapacity, pricePerKilometer, engine, color, TransmissionType.Manual, topSpeed);
  }
  createCaravan(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string,  livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle {
    return new Caravan(passengerCapacity, pricePerKilometer, engine, color, TransmissionType.Manual, livingArea, numberOfBeds, hasBathroom);
  }
  public createBus(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, busLength: number): IVehicle {
    return new Bus(passengerCapacity, pricePerKilometer, engine, color, TransmissionType.Manual, busLength);
  }

}
