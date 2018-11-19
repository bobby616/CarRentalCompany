// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';
import { CreateRental } from '../../src/core/commands';
import { ICommand, IModels, ITravelDatabase } from '../../src/core/contracts';
import { Models } from '../../src/core/engine/models-factory';
import { Bus, IBus, IRental, Rental } from '../../src/models';
import { IUser } from '../../src/models/contracts/user';
import { User } from '../../src/models/users/user-model';

describe('Create Rental command ', () => {
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
        it('correctly add the rental to the rentals Data Base', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'Manual', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();
            const factory: IModels = new Models();

            const user: IUser = new User('username', 'lastname', 20, 0, 'userche');
            const rent: IRental = new Rental('userche', 1, bus);

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateRental(travelDB, factory);
            const params: string[] = ['userche', '1', '0'];

            // Act
            command.execute(params);

            // Assert
            expect(travelDB.rentals[0]).toEqual(rent);
        });

        it('throws when the user is admin', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'Manual', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();
            const factory: IModels = new Models();

            const user: IUser = new User('username', 'lastname', 20, 1, 'userche');

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateRental(travelDB, factory);
            const params: string[] = ['userche', '1', '0'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
        });

        it('throws when the user does not exist', () => {
            // Arrange
            const bus: IBus = new Bus(12, 100, 'engien', 'color', 'Manual', 'brand', 10);
            const travelDB: ITravelDatabase = new mockTravelDatabase();
            const factory: IModels = new Models();

            const user: IUser = new User('username', 'lastname', 20, 0, 'userche');

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);

            const command: ICommand = new CreateRental(travelDB, factory);
            const params: string[] = ['user', '1', '0'];

            // Act & Assert
            expect(() => command.execute(params)).toThrow('THERE IS NO SUCH USER');
        });
    });
});
