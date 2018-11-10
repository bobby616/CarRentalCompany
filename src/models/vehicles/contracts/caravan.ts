import { IVehicle } from './vehicle';

export interface ICaravan extends IVehicle {
    livingArea: number;
    numberOfBeds: number;
    hasBathroom: boolean;
}
