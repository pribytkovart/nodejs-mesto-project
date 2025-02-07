import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users';
import cardsRouter from './routes/cards';
import { AuthContext } from './controllers/cards';

const { PORT = 3007 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://192.168.1.54:27017/mestodb');

app.use((req: Request, res: Response<unknown, AuthContext>, next: NextFunction) => {
  res.locals.user = {
    _id: '67a49142bf5e1ec3e041c807',
  };

  next();
});


app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
