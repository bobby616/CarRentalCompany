import { IRental } from '../../../models/contracts/rental';
import { IUser } from '../../../models/contracts/user';
import { IModels, ITravelDatabase, IUserDatabase } from '../../contracts';
import { ICommand } from '../../contracts/command';
import { Models } from '../../engine/models-factory';
import { TravelDatabase } from '../../travel-database';
import { UserDatabase } from '../../user-database';

export class ListUsers implements ICommand {

    private _factory: IModels;
    private _userDatabase: IUserDatabase;

    constructor() {
        this._factory = new Models();
        this._userDatabase = UserDatabase.INSTANCE;
    }

    public execute(parameters: string[]): string {
        const [userName] = parameters;
        if (this._userDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) === -1) {
            throw new Error('THERE IS NO SUCH USER!!');
        }
        if (this._userDatabase.users.find((user: IUser) => user.userName === userName).userType === 0) {
            throw new Error('THE USER DOESN"T HAVE PERMISSION TO DO THAT');
        }

        return `${
            this._userDatabase.users.length === 0
                ? 'There are no registered users.'
                : this._userDatabase.users.map((user: IUser) => user.print()).join('\n####################\n')
            }`;
    }
}
