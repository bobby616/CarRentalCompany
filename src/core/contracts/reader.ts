export interface IReader {
  read(path?: string): Promise<string[]>;
}
