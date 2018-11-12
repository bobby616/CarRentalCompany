import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { ICommand } from '../../contracts/command';
import { IUser } from './../../../models/contracts/user';
import { IModels } from './../../contracts/models-factory';
import { ITravelDatabase } from './../../contracts/travel-database';
@injectable()
export class CreateUser implements ICommand {
    private _factory: IModels;
    private _travelDatabase: ITravelDatabase;

    constructor(@inject(TYPES.data) data: ITravelDatabase,
        @inject(TYPES.models) factory: IModels) {
        this._factory = factory;
        this._travelDatabase = data;
    }

    public execute(parameters: string[]): string {
        const [userFirstName, userLastName, userAge, userType, userName] = parameters;
        if (userFirstName.length < 0 || userLastName.length < 0 || +userAge < 0 || +userType < 0) {
            throw new Error('INVALID CreateUser command parameters.');
        }
        if (this._travelDatabase.users.findIndex((currUser: IUser) => currUser.userName === userName) !== -1) {
            throw new Error('THERE IS ALREADY A USER WITH THAT NAME');
        }

        const user: IUser = this._factory.createUser(userFirstName, userLastName, +userAge, +userType, userName);

        this._travelDatabase.users.push(user);

        return `Created user with ID ${this._travelDatabase.users.length - 1}.`;
    }
}
