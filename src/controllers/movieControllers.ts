//express
import { Request, Response } from "express";

//Model
import { MovieModel } from "../Models/Movies";

//Logger
import Logger from "../../config/logger";

export async function createMovie(req:Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
        
    } catch (e: any) {
        Logger.error(`Erro no sitema  : ${e.message}`)
    }
}