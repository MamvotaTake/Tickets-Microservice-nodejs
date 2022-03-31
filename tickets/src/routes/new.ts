import express, { Request, Response } from "express";
import {requireAuth} from "@takesure/common"

const router = express.Router();

router.post('/api/tickets', (req: Request, res: Response) => {
    res.sendStatus(200);
})


export { router as createTicketRouter }