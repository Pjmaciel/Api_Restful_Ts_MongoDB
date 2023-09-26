import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next()
    }

    const extractErrors: object[] = []

    errors.array().forEach((err: any) => extractErrors.push({[err.param]: err.msg})) // parece que so funciona param se err for tipado com any.

    return res.status(422).json({
        errors: extractErrors,
    })

};

