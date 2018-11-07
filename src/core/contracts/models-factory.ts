import {
  IVehicle, IRental
} from '../../models';

export interface IModels {
  createBus(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: string, busLength: number): IVehicle;

  createCar(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: string, topSpeed: number): IVehicle;

  createMotorcycle(passengerCapacity: number, pricePerKilometer: number, engine: string,
    color: string, transmissionType: string, topSpeed: number): IVehicle;

  createCaravan(passengerCapacity: number, pricePerKilometer: number, engine: string, color: string, transmissionType: string, livingArea: number, numberOfBeds: number, hasBathroom: boolean): IVehicle;

  createRental(clientFirstName: string, clientLastName: string, 
    daysOfRental: number, vehicleId: IVehicle,): IRental;
}
