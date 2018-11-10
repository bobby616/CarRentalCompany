import { Container, interfaces } from 'inversify';
import { ICommand, IEngine, IReader } from '../contracts';
import { Engine } from '../engine';
import { FileReader } from '../engine/file-reader';
import { TYPES } from './types';

const container: Container = new Container();

container
  .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
  // tslint:disable-next-line
  .toFactory<ICommand>((context: interfaces.Context) => (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<IEngine>(TYPES.engine).to(Engine);
container.bind<IReader>(TYPES.reader).to(FileReader);

export { container };
