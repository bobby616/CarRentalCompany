import {
  IVehicle, IRental
} from '../../models';

export interface IModels {
  createBus(passengerCapacity: number, pricePerDay: number, engine: string, color: string, transmissionType: string, brand: string, busLength: number): IVehicle;

  createCar(passengerCapacity: number, pricePerDay: number, engine: string,
    color: string, transmissionType: string, brand: string, topSpeed: number): IVehicle;

  createMotorcycle(passengerCapacity: number, pricePerDay: number, engine: string,
    color: string, transmissionType: string, brand: string, topSpeed: number): IVehicle;

  createCaravan(passengerCapacity: number, pricePerDay: number, engine: string, color: string, transmissionType: string, brand: string, livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle;

  createRental(clientFirstName: string, clientLastName: string, 
    daysOfRental: number, vehicleId: IVehicle,): IRental;
}
