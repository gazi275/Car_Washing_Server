import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { user } from './App/module/user/user.route';
// Adjust the path as necessary

const app : Application = express();
app.use(cors());
app.use(express.json());

app.use('/api', user);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});


export default app;