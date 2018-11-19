// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';
import { CreateBus } from '../../src/core/commands';
import { ICommand, IModels, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { Bus, IBus } from '../../src/models';
import { IUser } from '../../src/models/contracts/user';
import { User } from '../../src/models/users/user-model';

describe('Creatingbus command ', () => {
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
        it('correctly adds the bus to the vehicles database', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'transmission', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'userche');
            const factory: IModels = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateBus(travelDB, factory);
            const params: string[] = ['userche', '12', '100', 'engien', 'color', 'Manual', 'brand', '10'];

            // Act
            command.execute(params);

            // Assert
            expect(travelDB.vehicles).toContain(bus);

        });

        it('throw when the passed username is invalid', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'transmission', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'uwe');
            const factory: IModels = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateBus(travelDB, factory);
            const params: string[] = ['userche', '12', '100', 'engien', 'color', 'Manual', 'brand', '10'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrow('THERE IS NO SUCH USER');
        });
        it('throw when the user is not an admin', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'Manual', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 0, 'userche');
            const factory: IModels = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateBus(travelDB, factory);
            const params: string[] = ['userche', '12', '100', 'engien', 'color', 'Manual', 'brand', '10'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
        });
        it('throw when the transmission is incorrect', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'transmission', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 1, 'userche');
            const factory: IModels = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateBus(travelDB, factory);
            const params: string[] = ['userche', '12', '100', 'engien', 'color', 'Manueeeal', 'brand', '10'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('Failed to parse CreateBus command parameters.');
        });
    });
});
