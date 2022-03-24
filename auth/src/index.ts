
import log from '../utils/logger'
import mongoose from 'mongoose';
import {app} from './app'


const start = async () => {

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined!')
    }

    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        log.info('Db Connected Successfully');
    } catch (err: any) {
        log.error(err);
    }

    app.listen(3000, () => {
        log.info('Listening on port 3000!!!')
    })
}

start();

