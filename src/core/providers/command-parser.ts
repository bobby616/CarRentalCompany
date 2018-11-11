import { inject, injectable } from 'inversify';
import { TYPES } from '../common/types';
import { ICommandFactory } from '../contracts';
import { ICommand } from '../contracts/command';
import { ICommandParser } from '../contracts/parser';
import { CommandFactory } from './travel-command-factory';

@injectable()
export class CommandParser implements ICommandParser {
  private _commandFactory: CommandFactory;

  constructor(@inject(TYPES.Cfactory) commandFactory: ICommandFactory) {
    this._commandFactory = commandFactory;
  }

  public parseCommand(line: string): ICommand {
    const commandName: string = line.trim().split(' ')[0];

    return this._commandFactory.getCommand(commandName);
  }

  public parseParameters(line: string): string[] {
    return line.split(' ').slice(1);
  }
}
