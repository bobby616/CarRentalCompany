import { inject, injectable } from 'inversify';
import { join } from 'path';
import { TYPES } from '../common/types';
import { ICommand, ICommandParser, IEngine, IReader } from '../contracts';
import { CommandParser } from '../providers';
import { FileReader } from './file-reader';
import { HtmlReader } from './html-reader';

@injectable()

export class Engine implements IEngine {

  private readonly _reader: IReader;

  private readonly _commandParser: ICommandParser;

  public constructor(@inject(TYPES.reader) reader: IReader,
  @inject(TYPES.parser) commandParser: ICommandParser) {
    this._reader = reader;
    // Commented this._reader = new HtmlReader();

    this._commandParser = commandParser;
  }

  public async start(): Promise<string> {
    const report: string[] = await this.processCommands();

    return Promise.resolve(this.printReports(report));
  }

  private printReports(reports: string[]): string {
    return reports.join('\n');
  }

  private async processCommands(): Promise<string[]> {
    const reports: string[] = [];

    (await this._reader.read(join(__dirname, './../../', 'commands.txt')))
      .forEach((currentLine: string) => {
        try {
          const currentCommand: ICommand = this._commandParser.parseCommand(currentLine);
          const line: string[] = this._commandParser.parseParameters(currentLine);
          const report: string = currentCommand.execute(line);
          reports.push(report);
        } catch (error) {
          reports.push(error.message);
        }
      });

    return reports;
  }
}
