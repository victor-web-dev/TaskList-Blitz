import { PrismaClient } from '@prisma/client';
import { ITaskData, ITaskModel } from '../interfaces/task.interface';
import Log from '../logs/generate.log';

export default class TaskModel implements ITaskModel {
  private prisma: PrismaClient;

  private logPath: string;

  private log: Log;

  constructor() {
    this.prisma = new PrismaClient();
    this.logPath = '../logs/model/taskLog.txt';
    this.log = new Log(this.logPath);
  }

  // eslint-disable-next-line consistent-return
  public async getAll(): Promise<ITaskData[] | undefined> {
    try {
      const data = await this.prisma.task.findMany();
      if (data.length < 1) return [];
      return data as ITaskData[];
    } catch (error) {
      if (error instanceof Error) {
        this.log.generate(error.message);
      }
    }
  }

  async createTask() {
    throw new Error('Method not implemented.');
  }

  async updateTask() {
    throw new Error('Method not implemented.');
  }

  async deleteTask() {
    throw new Error('Method not implemented.');
  }
}
