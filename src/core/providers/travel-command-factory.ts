import * as commands from '../commands';
import { ICommand, ICommandFactory, ITravelDatabase, IModels } from '../contracts';
import { injectable, inject } from 'inversify';
import { TYPES } from '../common/types';
import { TravelDatabase } from '../travel-database';
import { Models } from '../engine/models-factory';

@injectable()
export class CommandFactory implements ICommandFactory {

  private readonly _data: ITravelDatabase;
  private readonly _modelsFactory: IModels;
  private readonly _commands: Map<string, new (data: ITravelDatabase, factory: IModels) => ICommand>;

  public constructor(@inject(TYPES.data) data: ITravelDatabase, 
  @inject(TYPES.models) factory: IModels) {
    this._data = data;
    this._modelsFactory = factory;

    this._commands = Object
      .keys(commands)
      .reduce((allCommands: Map<string, new () => ICommand>, commandName: string): Map<string, new () => ICommand> => {
        // tslint:disable:no-any
        allCommands.set(commandName.toLowerCase(), (<any>commands)[commandName]);

        return allCommands;
      },
      new Map()
    );
  }

  public getCommand(commandName: string): ICommand {
    const lowerCaseCommandName: string = commandName.toLowerCase();

    const command: new (data: ITravelDatabase, factory: IModels) => ICommand = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error('Eroor parsing commands');
    }

    return new command(this._data, this._modelsFactory);
  }
}
