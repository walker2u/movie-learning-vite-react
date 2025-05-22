import express from "express";
import { addToFavorites, getTrendingMovies } from "./controller.js";
import { authenticator } from "../../middleware/authenticator.js";

const router = express.Router();

router.get("/", authenticator, getTrendingMovies);
router.post("/favourites", authenticator, addToFavorites);

export default router;