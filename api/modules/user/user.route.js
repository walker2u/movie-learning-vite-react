import express from "express";
import { getUserById, getFavMovies } from "./user.controller.js";
import { authenticator } from "../../middleware/authenticator.js";

const router = express.Router();

router.get("/:id", getUserById);
router.post("/favMovies", authenticator, getFavMovies);

export default router;