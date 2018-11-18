import 'reflect-metadata';
import { CreateBus, RemoveVehicle } from '../../src/core/commands';
import { ICommand, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { CommandFactory } from '../../src/core/providers';
import { Bus, IBus } from '../../src/models';
import { IUser } from '../../src/models/contracts/user';
import { User } from '../../src/models/users/user-model';

describe('Remove Vehicle command ', () => {
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
        it('throw error when the user does not have the permission', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'Manual', 'brand', 10);
            const bus2: IBus = new Bus(11, 100, 'engien', 'color', 'Manual', 'brand', 10);
            const travelDB = new mockTravelDatabase();

            const user: IUser = new User('username', 'lastname', 20, 0, 'userche');

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);
            travelDB.vehicles.push(bus2);

            const command: ICommand = new RemoveVehicle(travelDB);
            const params: string[] = ['userche', '1'];

            // Act & Assert
            expect(()=> command.execute(params)).toThrow('THE USER DOESN"T HAVE PERMISSION TO DO THAT');

        });
    });
});
