import { Container, interfaces } from 'inversify';
import { ICommand, IEngine, IReader, ITravelDatabase, ICommandParser } from '../contracts';
import { Engine } from '../engine';
import { FileReader } from '../engine/file-reader';
import { TYPES } from './types';
import { TravelDatabase } from '../travel-database';
import { CommandParser } from '../providers';

const container: Container = new Container();

container
  .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
  // tslint:disable-next-line
  .toFactory<ICommand>((context: interfaces.Context) => (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<IEngine>(TYPES.engine).to(Engine);
container.bind<IReader>(TYPES.reader).to(FileReader);
container.bind<ITravelDatabase>(TYPES.database).to(TravelDatabase).inSingletonScope();
container.bind<ICommandParser>(TYPES.parser).to(CommandParser);

export { container };
