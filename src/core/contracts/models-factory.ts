import {
  IVehicle
} from '../../models';
import { TransmissionType } from '../../models/vehicles/common/transmission-type';

export interface IModels {
  createBus(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: TransmissionType, busLength: number): IVehicle;

  createCar(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: TransmissionType, topSpeed: number): IVehicle;

  createMotorcycle(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: TransmissionType, topSpeed: number ): IVehicle;

  createCaravan(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: TransmissionType, livingArea: number, numberOfBeds: number,
    hasBathroom: boolean): IVehicle;

}
