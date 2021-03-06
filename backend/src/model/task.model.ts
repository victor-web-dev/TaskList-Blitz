/* eslint-disable consistent-return */
import { PrismaClient } from '@prisma/client';
import { ITaskData } from '../interfaces/task.interface';
import Log from '../logs/generate.log';

export default class TaskModel {
  private prisma: PrismaClient;

  private logPath: string;

  private log: Log;

  constructor() {
    this.prisma = new PrismaClient();
    this.logPath = './src/logs/model/taskLog.json';
    this.log = new Log(this.logPath);
  }

  public async getAll(): Promise<ITaskData[] | undefined> {
    try {
      const data = await this.prisma.task.findMany();
      if (data.length < 1) return [];
      return data as ITaskData[];
    } catch (error) {
      if (error instanceof Error) {
        await this.log.generate(error.message);
      }
    }
  }

  public async createTask(taskData: ITaskData): Promise<ITaskData | undefined> {
    try {
      const data = await this.prisma.task.create({ data: taskData });
      return data as ITaskData;
    } catch (error) {
      if (error instanceof Error) {
        await this.log.generate(error.message);
      }
    }
  }

  public async updateTask(task: ITaskData): Promise<ITaskData | undefined > {
    try {
      const data = await this.prisma.task.update({
        where: { id: task.id },
        data: { title: task.title, content: task.content, status: task.status },
      });
      return data as ITaskData;
    } catch (error) {
      if (error instanceof Error) {
        await this.log.generate(error.message);
        throw new Error('Invalid id, cannot update');
      }
    }
  }

  public async deleteTask(id: number): Promise<ITaskData | undefined> {
    try {
      const data = await this.prisma.task.delete({ where: { id } });
      return data as ITaskData;
    } catch (error) {
      if (error instanceof Error) {
        await this.log.generate(error.message);
        throw new Error('Invalid id, cannot delete');
      }
    }
  }
}
