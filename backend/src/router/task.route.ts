import express from 'express';

const taskRoute = express.Router();

taskRoute.get('/', () => {});

taskRoute.post('/', () => {});

taskRoute.patch('/:id', () => {});

taskRoute.delete('/:id', () => {});

export default taskRoute;
