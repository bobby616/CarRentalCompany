import 'reflect-metadata';
import { CreateBus, RemoveVehicle } from '../../src/core/commands';
import { ICommand, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { CommandFactory } from '../../src/core/providers';
import { Bus, IBus } from '../../src/models';
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
            const travelDB = new mockTravelDatabase();
            const user = new User('username', 'lastname', 20, 1, 'userche');
            const factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);
            const command: ICommand = new CreateBus(travelDB, factory);
            const params: string[] = ['userche', '12', '100', 'engien', 'color', 'Manual', 'brand', '10'];

            // Act
            command.execute(params);

            // Assert
            expect(travelDB.vehicles).toContain(bus);

        });
    });
});
