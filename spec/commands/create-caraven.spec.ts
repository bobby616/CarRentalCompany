import 'reflect-metadata';
import { CreateBus, RemoveVehicle, CreateCaravan } from '../../src/core/commands';
import { ICommand, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { CommandFactory } from '../../src/core/providers';
import { ICaravan } from '../../src/models';
import { User } from '../../src/models/users/user-model';
import { Caravan } from '../../src/models/vehicles/caravan-model';

describe('Creating Caravan command ', () => {
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
            const caravan: ICaravan = new Caravan(12, 120, 'engine', 'color', 'Manual', 'brand', 35, 2, true);
            const travelDB = new mockTravelDatabase();

            const user = new User('username', 'lastname', 20, 1, 'userche');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(caravan);

            const command: ICommand = new CreateCaravan(travelDB, factory);
            const params: string[] = ['userche', '12', '120', 'engien', 'color', 'Manual', 'brand', '35', '2', 'true'];

            // Act
            command.execute(params);

            // Assert
            expect(travelDB.vehicles).toContain(caravan);
        });

        it('throw when the passed username is invalid', () => {
            // Arrange
            const caravan: ICaravan = new Caravan(12, 120, 'engine', 'color', 'Manual', 'brand', 35, 2, true);
            const travelDB = new mockTravelDatabase();

            const user = new User('username', 'lastname', 20, 1, 'userche');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(caravan);

            const command: ICommand = new CreateCaravan(travelDB, factory);
            const params: string[] = ['user', '12', '120', 'engien', 'color', 'Manual', 'brand', '35', '2', 'true'];

            // Act & Assert
            expect(() => command.execute(params))
                .toThrow('THERE IS NO SUCH USER');
        });

        it('throw when the user is not an admin', () => {
            // Arrange
            const caravan: ICaravan = new Caravan(12, 120, 'engine', 'color', 'Manual', 'brand', 35, 2, true);
            const travelDB = new mockTravelDatabase();

            const user = new User('username', 'lastname', 20, 0, 'userche');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(caravan);

            const command: ICommand = new CreateCaravan(travelDB, factory);
            const params: string[] = ['userche', '12', '120', 'engien', 'color', 'Manual', 'brand', '35', '2', 'true'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
        });

        it('throw when the transmission is incorrect', () => {
            // Arrange
            const caravan: ICaravan = new Caravan(12, 120, 'engine', 'color', 'Manual', 'brand', 35, 2, true);
            const travelDB = new mockTravelDatabase();

            const user = new User('username', 'lastname', 20, 1, 'userche');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(caravan);

            const command: ICommand = new CreateCaravan(travelDB, factory);
            const params: string[] = ['userche', '12', '120', 'engien', 'color', 'Maerfnual', 'brand', '35', '2', 'true'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('Failed to parse CreateCaravan command parameters.');
        });
    });
});
