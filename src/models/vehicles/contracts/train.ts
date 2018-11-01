import { IVehicle } from './vehicle';

export interface ITrain extends IVehicle {
  carts: number;
}
