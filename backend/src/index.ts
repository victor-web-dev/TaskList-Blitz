import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import task from './route/task.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/task', task);

app.listen(PORT, () => { console.log(`listening on ${PORT}`); });
