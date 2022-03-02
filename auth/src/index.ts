import express from 'express';
import log from '../utils/logger'


const app = express();

app.use(express.json())



app.listen(3000, ()=>{
    log.info('Listening on port 3000!')
})