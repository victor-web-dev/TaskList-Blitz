import { ITaskData } from '../interfaces/task.interface';
import TaskModel from '../model/task.model';

export default class TaskService {
  private model: TaskModel;

  constructor() {
    this.model = new TaskModel();
  }

  public async getAll() {
    const data = await this.model.getAll();
    return data;
  }

  public async createTask(taskData: ITaskData) {
    const data = await this.model.createTask(taskData);
    if (!data) throw new Error('Not created, something went wrong');
    return data;
  }

  public async updateTask(task: ITaskData) {
    const data = await this.model.updateTask(task);
    return data;
  }

  public async deleteTask(id: number) {
    const data = await this.model.deleteTask(id);
    return data;
  }
}
