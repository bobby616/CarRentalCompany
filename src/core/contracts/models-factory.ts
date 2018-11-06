import {
  IVehicle
} from '../../models';
import { TransmissionType } from '../../models/vehicles/common/transmission-type';

export interface IModels {
  createBus(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, busLength: number): IVehicle;

  createCar(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: TransmissionType, topSpeed: number): IVehicle;

  createMotorcycle(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: TransmissionType, topSpeed: number ): IVehicle;

  createCaravan(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string,  livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle;

}
