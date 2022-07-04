import { Request, Response, NextFunction } from 'express';
import { StatusCodes as sc } from 'http-status-codes';
// import { TaskStatus } from '../interfaces/task.interface';

const checkTitle = (title: string): boolean => {
  if (title === undefined || title === null) return false;
  if (title.length < 1) return false;
  if (title.length > 100) return false;
  return true;
};

const checkContent = (content: string): boolean => {
  if (content === undefined || content === null) return false;
  if (content.length > 500) return false;
  return true;
};

const checkTaskStatus = (status: string): boolean => {
  const statusTypes = ['done', 'in-progress', 'pending'];
  if (status === undefined || status === null) return false;
  if (!statusTypes.some((e) => status === e)) return false;
  if (status.length < 1) return false;
  return true;
};

const verifyTask = (req: Request, res: Response, next: NextFunction) => {
  const { title, content, status } = req.body;
  if (!checkTitle(title)) {
    return res.status(sc.BAD_REQUEST).send({ message: 'Invalid or Missing Title' });
  }
  if (!checkContent(content)) {
    return res.status(sc.BAD_REQUEST).send({ message: 'Invalid or Missing Content' });
  }
  if (!checkTaskStatus(status)) {
    return res.status(sc.BAD_REQUEST).send({ message: 'Invalid or Missing Status' });
  }
  return next();
};
export default verifyTask;
