import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { RequestValidatorError } from '../errors/request-validation-error';
import { DatabaseConnectionErrors } from '../errors/database-connection-errors';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),

    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters long'),
], 
async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidatorError(errors.array())
    }
    const { email, password } = req.body;


    console.log('Creating a user ......');
    throw new DatabaseConnectionErrors();

    res.send({});
})

export { router as signupRouter }