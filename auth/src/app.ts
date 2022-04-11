import express from 'express';
import 'express-async-errors'
import log from '@takesure/common'
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from '@takesure/common'
import { NotFoundError } from '@takesure/common'



const app = express();
app.set('trust proxy', true);
app.use(express.json())
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
}));

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

//Error Handler Middleware
app.all('*', async (req, res, next) => {
    next(new NotFoundError());
});

app.use(errorHandler);

export {app};