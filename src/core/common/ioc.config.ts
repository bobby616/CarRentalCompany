import { Container, interfaces } from 'inversify';
import { ICommand, IEngine, IReader, ICommandParser, ICommandFactory } from '../contracts';
import { Engine } from '../engine';
import { FileReader } from '../engine/file-reader';
import { TYPES } from './types';
import { CommandParser, CommandFactory } from '../providers';

const container: Container = new Container();

container
  .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
  // tslint:disable-next-line
  .toFactory<ICommand>((context: interfaces.Context) => (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<IEngine>(TYPES.engine).to(Engine);
container.bind<IReader>(TYPES.reader).to(FileReader);
container.bind<ICommandParser>(TYPES.parser).to(CommandParser);
container.bind<ICommandFactory>(TYPES.Cfactory).to(CommandFactory);

export { container };
