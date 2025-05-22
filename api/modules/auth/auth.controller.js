import { prisma } from "../../prisma/client.js";
import bcrypt from "bcryptjs";
import { responseFormatter } from "../../helper/responseFormatter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        const encPassword = await bcrypt.hash(pass, 10);
        const user = await prisma.user.create({
            data: {
                email: email,
                password: encPassword
            }
        });
        const { password, ...rest } = user;
        return res.json(responseFormatter(true, 201, "User created successfully", rest));
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

export const login = async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.json(responseFormatter(false, 404, "Invalid Username or Password!"));
        }
        const passMatch = await bcrypt.compare(pass, user.password);
        if (!passMatch) {
            return res.json(responseFormatter(false, 404, "Invalid Username or Password!"));
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            algorithm: "HS256",
        });
        const { password, ...rest } = user;
        return res.cookie("access_token", token, { httpOnly: true }).json(responseFormatter(true, 200, "Login successful!", rest));
    } catch (error) {
        console.log("Error in login", error);
        res.status(400).json(error.message);
    }
}