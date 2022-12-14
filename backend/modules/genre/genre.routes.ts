import { Router } from "express";
import { getGenre, getGenres, saveGenre, songsCount } from "./genre.controller";

const genreRouter = Router();

//Save new Genre
genreRouter.post("/", saveGenre);

//Update Genre
genreRouter.put("/:id", saveGenre);

//get all Genres
genreRouter.get("/", getGenres);
genreRouter.get("/songscount", songsCount);

//get Genre by Id
genreRouter.get("/:id", getGenre);

export default genreRouter;
