import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app : Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;