import { Router } from 'express';
import { getUser, getAllUsers, createUser } from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:userId', getUser);
usersRouter.post('/', createUser);

export default usersRouter;
