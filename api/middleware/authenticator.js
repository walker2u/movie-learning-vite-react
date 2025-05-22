import { responseFormatter } from "../helper/responseFormatter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticator = async (req, res, next) => {
    try {
        const token = req.cookies?.access_token;
        if (!token) {
            return res.json(responseFormatter(false, 401, "Unauthorized!"));
        }
        jwt.verify(token, process.env.JWT_SECRET, { algorithm: "HS256" }, (err, userId) => {
            if (err) {
                return res.json(responseFormatter(false, 401, "Unauthorized!"));
            }
            req.userId = userId.id;
            next();
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};