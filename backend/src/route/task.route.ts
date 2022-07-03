import express from 'express';
import TaskController from '../controller/task.controller';

const taskRoute = express.Router();
const tc = new TaskController();

taskRoute.get('/', tc.getAll.bind(tc));

taskRoute.post('/', () => {});

taskRoute.patch('/:id', () => {});

taskRoute.delete('/:id', () => {});

export default taskRoute;
