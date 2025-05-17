import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { neon } from "@neondatabase/serverless";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const sql = neon(process.env.DATABASE_URL);

// const data = await sql`SELECT * FROM users;`;

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});