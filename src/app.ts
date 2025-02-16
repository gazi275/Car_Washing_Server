import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { user } from './App/module/user/user.route';
import { userLogin } from './App/module/user/auth/auth.route';
// Adjust the path as necessary

const app : Application = express();
app.use(cors());
app.use(express.json());

app.use('/api', user);
app.use('/api', userLogin);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});


export default app;