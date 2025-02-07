import { Router } from 'express';
import { getCards, delCard, createCard } from '../controllers/cards';

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.delete('/:cardId', delCard);
cardsRouter.post('/', createCard);

export default cardsRouter;
