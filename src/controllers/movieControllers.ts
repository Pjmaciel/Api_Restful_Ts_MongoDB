//express
import { Request, Response } from "express";

//Model
import { MovieModel } from "../Models/Movies";

//Logger
import { isValidObjectId } from "mongoose";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)

    } catch (e: any) {
        Logger.error(`Erro no sitema  : ${e.message}`)
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            // Se o ID não for válido, retorne uma mensagem apropriada
            return res.status(400).json({ error: "ID de filme inválido" });
        }

        const movie = await MovieModel.findById(id);

        if (!movie) {
            // Se o filme não for encontrado, retorne uma mensagem apropriada
            return res.status(404).json({ error: "O filme não existe." });
        }

        return res.status(200).json(movie);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export async function getAllMovies(req: Request, res: Response) {

    try {

        const movies = await MovieModel.find()
        return res.status(200).json(movies);


    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export async function removeMovieById(req: Request, res: Response ){
    
    try{
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            // Se o ID não for válido, retorne uma mensagem apropriada
            return res.status(400).json({ error: "ID de filme inválido" });
        }

        const movie = await MovieModel.findById(id);

        if (!movie) {
            // Se o filme não for encontrado, retorne uma mensagem apropriada
            return res.status(404).json({ error: "O filme não existe." });
        }

        await movie.deleteOne()
        return res.status(200).json({msg:"Filme deletado com sucesso!"});


    }catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export async function updateMovie(req:Request, res: Response) {
    try{

        const id = req.params.id;

        if (!isValidObjectId(id)) {
            // Se o ID não for válido, retorne uma mensagem apropriada
            return res.status(400).json({ error: "ID de filme inválido" });
        }
        const data = req.body;
        const movie = await MovieModel.findById(id);

        await MovieModel.updateOne({_id: id}, data)

        return res.status(200).json(data)





    }catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
    
}


