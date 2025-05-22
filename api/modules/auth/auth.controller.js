import { prisma } from "../../prisma/client.js";
import bcrypt from "bcryptjs";
import { responseFormatter } from "../../helper/responseFormatter.js";

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const encPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email: email,
                password: encPassword
            }
        });
        return res.json(responseFormatter(true, 201, "User created successfully", user));
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.json(responseFormatter(false, 404, "Invalid Username or Password!"));
        }
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.json(responseFormatter(false, 404, "Invalid Username or Password!"));
        }
        return res.json(responseFormatter(true, 200, "Login successful!", user));
    } catch (error) {
        console.log("Error in login", error);
        res.status(400).json(error.message);
    }
}