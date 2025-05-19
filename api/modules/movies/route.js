import express from "express";
import { addToFavorites, getTrendingMovies } from "./controller.js";

const router = express.Router();

router.get("/", getTrendingMovies);
router.post("/favourites", addToFavorites);

export default router;