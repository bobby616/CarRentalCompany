import 'reflect-metadata';
import { ITravelDatabase, IModels, ICommand } from '../../src/core/contracts';
import { IUser } from '../../src/models/contracts/user';
import { User } from '../../src/models/users/user-model';
import { CreateUser } from '../../src/core/commands';
import { Models } from '../../src/core/engine/models-factory';

describe('Create User should', () => {
    let mockTravelDatabase: jest.Mock<ITravelDatabase>;
    beforeEach(() => {
        mockTravelDatabase = jest.fn<ITravelDatabase>().mockImplementation(() =>
            ({
                vehicles: [],
                rentals: [],
                users: []
            }));
    })
    it('add user to the Data Base when valid values are passed', () => {
        // Arrange
        const travelDB = new mockTravelDatabase();
        const factory: IModels = new Models();

        const user: IUser = new User('Peter', 'Stoqnov', 20, 0, 'userche');

        travelDB.users.push(user);


        const command: ICommand = new CreateUser(travelDB, factory);
        const params: string[] = ['pepe', 'Umberto', '20', '0', 'user'];

        // Act
        command.execute(params);

        expect(travelDB.users).toContain(user);
    });
});