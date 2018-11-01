export interface ICommand {
  execute(parameters: string[]): string;
}
