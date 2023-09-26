import { Request, Response, Router } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovieById, updateMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router.get("/test", (req: Request,res: Response)=>{
    res.status(200).send("API Working!");
})
.post("/movie", movieCreateValidation(), validate , createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id", removeMovieById)
.patch("/movie/:id", updateMovie,movieCreateValidation(), validate);
