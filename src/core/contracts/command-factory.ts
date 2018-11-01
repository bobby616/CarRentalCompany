import { ICommand } from './command';

export interface ICommandFactory {
  getCommand(commandName: string): ICommand;
}
