import { IUser } from '../models/contracts/user';
import { IUserDatabase } from './contracts/user-database';

export class UserDatabase implements IUserDatabase {

    private static readonly SINGLE_INSTANCE: IUserDatabase = new UserDatabase();

    private readonly _users: IUser[];

    private constructor() {
        this._users = [];
    }

    public get users(): IUser[] {
        return this._users;
    }

    public static get INSTANCE(): IUserDatabase {
        return this.SINGLE_INSTANCE;
    }
}
