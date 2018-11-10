import { IReader } from '../contracts';

export class HtmlReader implements IReader {
  public async read(): Promise<string[]> {
    const el: HTMLInputElement = <HTMLInputElement>(document.getElementById('input'));

    if (el) {
      return Promise.resolve(el.value.trim()
        .split(/\n|\r\n/)
        .filter((x: string) => x !== '')
        .filter((x: string) => !x.startsWith('//'))
        .map((x: string) => x.trim()));
    } else {
      return Promise.resolve([]);
    }
  }
}
