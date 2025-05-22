import express from "express";
import { getUserById } from "./user.controller.js";

const router = express.Router();

router.get("/:id", getUserById);

export default router;