
import log from './utils/logger'
import mongoose from 'mongoose';
import { app } from './app'
import { natsWrapper } from './nats-wrapper'


const start = async () => {

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined!')
    }

    if (!process.env.MONGO_URL) {
        throw new Error('MONGO_URL must be defined!')
    }

    try {
        await natsWrapper.connect('ticketing','shdjshdjd', 'http://nats-srv:4222');
        
        natsWrapper.client.on('close', () => {
            console.log('NATS connection closed');
            process.exit();
        })
        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());

        await mongoose.connect(process.env.MONGO_URL);
        log.info('Db Connected Successfully');
    } catch (err: any) {
        log.error(err);
    }

    app.listen(3000, () => {
        log.info('Listening on port 3000!!!')
    })
}

start();

