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
}
