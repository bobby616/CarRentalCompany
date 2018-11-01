import { ICommand } from './command';
export interface ICommandParser {
  parseCommand(line: string): ICommand;

  parseParameters(line: string): string[];
}
