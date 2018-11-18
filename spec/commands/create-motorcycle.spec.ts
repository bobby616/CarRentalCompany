import 'reflect-metadata';
import { CreateBus, RemoveVehicle } from '../../src/core/commands';
import { ICommand, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { CommandFactory } from '../../src/core/providers';
import { ICar, IMotor } from '../../src/models';
import { IUser } from '../../src/models/contracts/user';
import { User } from '../../src/models/users/user-model';
import { CreateCar } from './../../src/core/commands/creating/create-car-command';
import { CreateMotorcycle } from './../../src/core/commands/creating/create-motorcycle-command';
import { ICommandFactory } from './../../src/core/contracts/command-factory';
import { Car } from './../../src/models/vehicles/car-model';
import { Motorcycle } from './../../src/models/vehicles/motorcycle-model';

describe('Create motorcycle command ', () => {
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
        it('correctly adds the bike to the vehicles database', () => {
            // Arrange
            const motor: IMotor = new Motorcycle(2, 30, 'turbo', 'green', 'Manual', 'Mercedes', 250);
            const travelDB = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(motor);
            const command: ICommand = new CreateMotorcycle(travelDB, factory);
            const params: string[] = ['adi11', '2', '30', 'turbo', 'green', 'Manual', 'Mercedes', '250'];

            // Act
            command.execute(params);

            // Assert
            expect(travelDB.vehicles).toContain(motor);

        });
        it('throw when the passed username is invalid', () => {
            // Arrange
            const motor: IMotor = new Motorcycle(2, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(motor);

            const command: ICommand = new CreateMotorcycle(travelDB, factory);
            const params: string[] = ['username', '2', '7', 'turbo', 'green', 'Automatic', 'BMW', '100'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrow('THERE IS NO SUCH USER');
        });

        it('throw when the user is not an admin', () => {
            // Arrange
            const motor: IMotor = new Motorcycle(2, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 0, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(motor);
            ``;
            const command: ICommand = new CreateMotorcycle(travelDB, factory);
            const params: string[] = ['adi11', '2', '7', 'turbo', 'green', 'HalfAutomatic', 'BMW', '100'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrowError();
        });
        it('throw when the transmission is incorrect', () => {
            // Arrange
            const motor: IMotor = new Motorcycle(2, 70, 'turbo', 'green', 'Automatic', 'BMW', 100);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 0, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(motor);

            const command: ICommand = new CreateMotorcycle(travelDB, factory);
            const params: string[] = ['adi11', '2', '7', 'turbo', 'green', 'HalfAutomatic', 'BMW', '100'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrowError();
        });
        it('throw when the passengers given are more than 4 or less than 0', () => {
            // Arrange
            const motor: IMotor = new Motorcycle(2, 70, 'turbo', 'green', 'Automatic', 'BMW', NaN);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 0, 'adi11');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(motor);

            const command: ICommand = new CreateMotorcycle(travelDB, factory);
            const params: string[] = ['adi11', '2', '70', 'turbo', 'green', 'Automatic', 'BMW', 'NaN'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrowError('Failed to parse CreateMotorcycle command parameters.');
        });
    });
});
