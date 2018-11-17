import 'reflect-metadata';
import { ITravelDatabase, ICommand } from "../../src/core/contracts";
import { IBus, Bus } from "../../src/models";
import { CreateBus, RemoveVehicle } from "../../src/core/commands";
import { CommandFactory } from "../../src/core/providers";
import { Models } from "../../src/core/engine/models-factory";
import { User } from '../../src/models/users/user-model';


describe('Remove Vehicle command ', ()=> {
    let mockTravelDatabase: jest.Mock<ITravelDatabase>;

    beforeEach(() =>{
        mockTravelDatabase = jest.fn<ITravelDatabase>().mockImplementation(()=>
        ({
            vehicles: [],
            rentals: [],
            users: [],
        }));
    });

    describe('execute method should', ()=>{
        it('correctly remove vehicle from vehicles Data Base', ()=>{
            // Arrange
            let bus: IBus = new Bus(12, 100, 'engien', 'color', 'transmission', 'brand', 10);
            let travelDB = new mockTravelDatabase();
            let user = new User('username','lastname',20, 1, 'userche');
            let factory = new Models();

            travelDB.users.push(user);
            travelDB.vehicles.push(bus);
            let command: ICommand = new RemoveVehicle(travelDB);
            let params: string[] = ['userche', '0'];

            // Act
            command.execute(params);

            // Assert
            expect(()=> (travelDB.vehicles)).not.toContain(bus);

        });
    });
});