import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { user } from './App/module/user/user.route';
import { userLogin } from './App/module/auth/auth.route';
import { services } from './App/module/Services/service.route';
import { slot } from './App/module/Slot/slot.route';
import { booking } from './App/module/Booking/booking.route';
import globalErrorHandler from './mildleware/globalErrorhandler';
import notFound from './mildleware/notFound';

// Adjust the path as necessary

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use('/api', user);
app.use('/api', userLogin);
app.use('/api', services);
app.use('/api', slot);
app.use('/api', booking);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/error-test', (req: Request, res: Response, next: NextFunction) => {
  next(new Error('This is a test error!')); // ✅ Simulate an error
});


app.use(globalErrorHandler);


app.use(notFound);

export default app;
