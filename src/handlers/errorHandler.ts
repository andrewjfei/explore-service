import { NextFunction, Request, Response } from "express";
import { winston } from "../clients";
import { Error } from "../errors";

function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void {
    winston.error(err.message);

    res.status(err.status).json({ status: "ERROR", error: { code: err.code, message: err.message } });
}

export default errorHandler;
