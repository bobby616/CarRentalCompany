import { Container, interfaces } from 'inversify';
import { ICommand, ICommandFactory, ICommandParser, IEngine, IModels, IReader, ITravelDatabase } from '../contracts';
import { Engine } from '../engine';
import { FileReader } from '../engine/file-reader';
import { Models } from '../engine/models-factory';
import { CommandFactory, CommandParser } from '../providers';
import { TravelDatabase } from '../travel-database';
import { TYPES } from './types';

const container: Container = new Container();

container
  .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
  // tslint:disable-next-line
  .toFactory<ICommand>((context: interfaces.Context) => (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<IEngine>(TYPES.engine).to(Engine);
container.bind<IReader>(TYPES.reader).to(FileReader);
container.bind<ICommandParser>(TYPES.parser).to(CommandParser);
container.bind<ICommandFactory>(TYPES.Cfactory).to(CommandFactory);
container.bind<ITravelDatabase>(TYPES.data).to(TravelDatabase).inSingletonScope();
container.bind<IModels>(TYPES.models).to(Models);

export { container };
