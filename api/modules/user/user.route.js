import express from "express";
import { createUser, getUserById } from "./user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUserById);

export default router;