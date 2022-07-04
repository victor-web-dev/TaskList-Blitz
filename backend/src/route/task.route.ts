import express from 'express';
import TaskController from '../controller/task.controller';
import { verifyTask, verifyUpdateTask } from '../middlewares/task.middleware';

const taskRoute = express.Router();
const tc = new TaskController();

taskRoute.get('/', tc.getAll.bind(tc));

taskRoute.post('/', verifyTask, tc.createTask.bind(tc));

taskRoute.patch('/', verifyUpdateTask, tc.updateTask.bind(tc));

taskRoute.delete('/:id', tc.deleteTask.bind(tc));

export default taskRoute;
