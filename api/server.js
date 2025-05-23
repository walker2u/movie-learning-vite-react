import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./modules/user/user.route.js";
import authRouter from "./modules/auth/auth.route.js"
import { errorHandler } from "./middleware/errorHandler.js";
import MovieRouter from "./modules/movies/route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

//user routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use(errorHandler);

//movie routes
app.use("/api/movies", MovieRouter);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});