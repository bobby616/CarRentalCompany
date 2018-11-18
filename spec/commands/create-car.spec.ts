import 'reflect-metadata';
import { CreateBus, RemoveVehicle } from '../../src/core/commands';
import { ICommand, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { CommandFactory } from '../../src/core/providers';
import { ICar } from '../../src/models';
import { IUser } from '../../src/models/contracts/user';
import { User } from '../../src/models/users/user-model';
import { CreateCar } from './../../src/core/commands/creating/create-car-command';
import { ICommandFactory } from './../../src/core/contracts/command-factory';
import { Car } from './../../src/models/vehicles/car-model';

describe('Create car command ', () => {
    let mockTravelDatabase: jest.Mock<ITravelDatabase>;

    beforeEach(() => {
        mockTravelDatabase = jest.fn<ITravelDatabase>().mockImplementation(() =>
            ({
                vehicles: [],
                rentals: [],
                users: []
            }));
    });

    describe('execute method should', () => {
        it('correctly adds the car to the vehicles database', () => {
            // Arrange
            const car: ICar = new Car(5, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB = new mockTravelDatabase();

            const user = new User('username', 'lastname', 20, 1, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(car);
            const command: ICommand = new CreateCar(travelDB, factory);
            const params: string[] = ['adi11', '5', '7', 'turbo', 'green', 'Automatic', 'BMW', '100'];

            // Act
            command.execute(params);

            // Assert
            expect(travelDB.vehicles).toContain(car);

        });
        it('throw when the passed username is invalid', () => {
            // Arrange
            const car: ICar = new Car(5, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(car);

            const command: ICommand = new CreateCar(travelDB, factory);
            const params: string[] = ['username', '5', '7', 'turbo', 'green', 'Automatic', 'BMW', '100'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrow('THERE IS NO SUCH USER');
        });

        it('throw when the user is not an admin', () => {
            // Arrange
            const car: ICar = new Car(5, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 0, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(car);

            const command: ICommand = new CreateCar(travelDB, factory);
            const params: string[] = ['adi11', '5', '7', 'turbo', 'green', 'Automatic', 'BMW', '100'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrowError();
        });

        it('throw when the transmission is incorrect', () => {
            // Arrange
            const car: ICar = new Car(5, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(car);

            const command: ICommand = new CreateCar(travelDB, factory);
            const params: string[] = ['adi11', '5', '7', 'turbo', 'green', 'HalfAutomatic', 'BMW', '100'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('Failed to parse CreateCar command parameters.');
        });
    });
});
