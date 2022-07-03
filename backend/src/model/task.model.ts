import { PrismaClient } from '@prisma/client';
import { ITaskData, ITaskModel } from '../interfaces/task.interface';

export default class TaskModel implements ITaskModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<ITaskData[]> {
    throw new Error('Method not implemented.');
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
