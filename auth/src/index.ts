import express from 'express';
import 'express-async-errors'
import log from '../utils/logger'

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middleware/error-handler'
import { NotFoundError } from './errors/not-found-error'



const app = express();
app.use(express.json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

//Error Handler Middleware
app.all('*', async(req, res, next) => {
    next(new NotFoundError());
});

app.use(errorHandler);



app.listen(3000, () => {
    log.info('Listening on port 3000!!!')
})