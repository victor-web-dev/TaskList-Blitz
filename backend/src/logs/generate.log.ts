import fs from 'fs/promises';

export default class Log {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  public async generate(Errormessage: string) {
    const log = {
      message: Errormessage,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };
    await fs.appendFile(this.path, JSON.stringify(log, null, 2));
  }
}
