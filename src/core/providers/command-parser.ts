import { ICommand } from '../contracts/command';
import { ICommandParser } from '../contracts/parser';
import { CommandFactory } from './travel-command-factory';
export class CommandParser implements ICommandParser {
  private _commandFactory: CommandFactory;

  constructor() {
    this._commandFactory = new CommandFactory();
  }

  public parseCommand(line: string): ICommand {
    const commandName: string = line.trim().split(' ')[0];

    return this._commandFactory.getCommand(commandName);
  }

  public parseParameters(line: string): string[] {
    return line.split(' ').slice(1);
  }
}
