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

  createCar(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: TransmissionType, topSpeed: number): IVehicle {
    return new Car(passengerCapacity, pricePerKilometer, engine, color, transmissionType, topSpeed);
  }
  createMotorcycle(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: TransmissionType, topSpeed: number): IVehicle {
    return new Motorcycle(passengerCapacity, pricePerKilometer, engine, color, transmissionType, topSpeed);
  }
  createCaravan(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: TransmissionType, livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle {
    return new Caravan(passengerCapacity, pricePerKilometer, engine, color, transmissionType, livingArea, numberOfBeds, hasBathroom);
  }
  public createBus(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: TransmissionType, busLength: number): IVehicle {
    return new Bus(passengerCapacity, pricePerKilometer, engine, color, transmissionType, busLength);
  }

}
