import { Request, Response } from 'express';
import Card from '../models/card';

export type AuthContext = {
  user: {
    _id: string
  }
};

export const delCard = (req: Request, res: Response<unknown, AuthContext>) => {
  const _id = req.params.cardId;

  return Card.deleteOne({ _id })
    .then((card) => res.send(card))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

export const getCards = (req: Request, res: Response<unknown, AuthContext>) => {
  console.log(res.locals.user._id);

  return Card.find({})
    .then((card) => res.send(card))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

export const createCard = (req: Request, res: Response<unknown, AuthContext>) => {
  const { name, link } = req.body;

  return Card.create({
    name, link, createdAt: Date.now(), owner: res.locals.user._id,
  })
    .then((card) => res.send(card))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
