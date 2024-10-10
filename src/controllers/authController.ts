import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services";
import { winston } from "../clients";
import { Error } from "../errors";
import { InvalidRequestBodyError } from "../errors";
import { HttpMethod } from "../enums";

async function authenticateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { username, password } = req.body;

    if (!username || !password) {
        const err: Error = new InvalidRequestBodyError(HttpMethod.POST, "/auth", ["username", "password"]);
        return next(err);
    }

    try {
        winston.info(`attempting to authenticate user "${username}" ...`);
        const jwt: string = await AuthService.authenticateUser(username, password);

        winston.info(`successfully authenticated user "${username}"`);
        res.status(200).json({ jwt });
    } catch (err) {
        next(err);
    }
}

export { authenticateUser };
