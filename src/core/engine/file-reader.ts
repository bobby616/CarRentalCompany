import { readFile } from 'fs';
import { IReader } from './../contracts/reader';
import { injectable } from 'inversify';

@injectable()
export class FileReader implements IReader {
  public async read(path?: string): Promise<string[]> {
    return new Promise((resolve: (str: string[]) => void, reject: (str: Error) => void): void => {
      readFile(path, 'utf-8', ((err: Error, data: string): void => {
        if (err) {
          reject(err);
        }
        resolve(
          data.trim()
            .split(/\n|\r\n/)
            .filter((x: string) => x !== '')
            .filter((x: string) => !x.startsWith('//'))
            .map((x: string) => x.trim()));
      }));
    });
  }
}
