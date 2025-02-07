import { Request, Response } from 'express';
import User from '../models/user';

export const getUser = (req: Request, res: Response) => {
  const _id = req.params.userId;

  return User.find({ _id })
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

export const getAllUsers = (req: Request, res: Response) => User.find({})
  .then((user) => res.send(user))
  .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));

export const createUser = (req: Request, res: Response) => {
  const { name, about, avatar } = req.body;

  return User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
