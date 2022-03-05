import { CustomError } from "./custom-error";

export class DatabaseConnectionErrors extends CustomError {

    statusCode = 500

    reason = 'Error connecting to database'
    constructor() {
        super('Invalid request parameters');

        Object.setPrototypeOf(this, DatabaseConnectionErrors.prototype)
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ]
    }
}