import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./modules/user/user.route.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/user", userRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});