import { Response, Request } from 'express';
import { StatusCodes as sc } from 'http-status-codes';
import TaskService from '../service/task.service';

export default class TaskController {
  private service: TaskService;

  constructor() {
    this.service = new TaskService();
  }

  public async getAll(req: Request, res: Response) {
    try {
      const data = await this.service.getAll();
      return res.status(sc.OK).json(data);
    } catch (error) {
      return res.status(sc.INTERNAL_SERVER_ERROR).end();
    }
  }

  public async createTask(req: Request, res: Response) {
    try {
      const task = req.body;
      const data = await this.service.createTask(task);
      return res.status(sc.CREATED).json(data);
    } catch (error) {
      return res.status(sc.INTERNAL_SERVER_ERROR).end();
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const task = req.body;
      const data = await this.service.updateTask(task);
      return res.status(sc.OK).json(data);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(sc.BAD_REQUEST).json({ message: error.message });
      }
      return res.status(sc.INTERNAL_SERVER_ERROR).end();
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.service.deleteTask(parseInt(id, 10));
      return res.status(sc.OK).json(data);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(sc.BAD_REQUEST).json({ message: error.message });
      }
      return res.status(sc.INTERNAL_SERVER_ERROR).end();
    }
  }
}
