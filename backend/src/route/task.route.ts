import express from 'express';
import TaskController from '../controller/task.controller';
import verifyTask from '../middlewares/task.middleware';

const taskRoute = express.Router();
const tc = new TaskController();

taskRoute.get('/', tc.getAll.bind(tc));

taskRoute.post('/', verifyTask, tc.createTask.bind(tc));

taskRoute.patch('/:id', () => {});

taskRoute.delete('/:id', () => {});

export default taskRoute;
