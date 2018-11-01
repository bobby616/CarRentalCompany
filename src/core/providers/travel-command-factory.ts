import * as commands from '../commands';
import { ICommand, ICommandFactory } from '../contracts';

export class CommandFactory implements ICommandFactory {

  public getCommand(className: string): ICommand {
    // Only if the commands are to lower. Otherwise remove it!
    const commandsToLower: any = Object.keys(commands).reduce((acc: any, key): {} => {
      const newKey = key.toLowerCase();
      acc[newKey] = <ICommand>(<any>commands)[key];
      return acc;
    }, {});
    // tslint:disable-next-line:no-any
    return new (commandsToLower)[className]();
  }
}
