// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';
import { container } from './core/common/ioc.config';
import { TYPES } from './core/common/types';
import { IEngine } from './core/contracts/engine';
import { Engine } from './core/engine';

const engine: IEngine = container.get<IEngine>(TYPES.engine);

const consoleRender: () => Promise<void> = async (): Promise<void> => {
  try {
    const resultText: string = await engine.start();
    console.log(resultText);
  } catch (error) {
    console.log('[CHANGE] the reader in Engine with the other one!!!');
  }
};

consoleRender();

