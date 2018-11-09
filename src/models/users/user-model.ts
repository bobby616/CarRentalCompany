import { UserType } from '../vehicles/common/user-type';
import { IUser } from './../contracts/user';

export class User implements IUser {

  private readonly _userFirstName: string;
  private readonly _userLastName: string;
  private readonly _userAge: number;
  private readonly _userType: UserType;

  public constructor(
    userFirstName: string,
    userLastName: string,
    userAge: number,
    userType: UserType
  ) {
    this.validateUserAge(userAge);

    this._userFirstName = userFirstName;
    this._userLastName = userLastName;
    this._userAge = userAge;
    this._userType = userType;
  }

  public get userFirstName() : string {
    return this._userFirstName;
  }

  public get userLastName() : string {
    return this._userLastName;
  }

  public get userAge() : number {
    return this._userAge;
  }

  public get userType() : UserType {
    return this._userType;
  }

  protected validateUserAge(userAge: number) : void {
    if (userAge < 18) {
      throw new Error('User must be 18 years or older.');
    }
  }

}
