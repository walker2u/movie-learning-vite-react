import { prisma } from "../../prisma/client.js";
import { responseFormatter } from "../../helper/responseFormatter.js";
import dotenv from "dotenv";

dotenv.config();
const RAPID_API_HOST = process.env.RAPID_API_HOST;
const RAPID_API_KEY = process.env.RAPID_API_KEY;

export const getUserById = async (req, res) => {
    try {
        let { id } = req.params;
        id = Number(id);
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (!user) {
            return res.json(responseFormatter(false, 404, "User not found!"));
        }
        const { password, ...rest } = user;
        return res.json(responseFormatter(true, 200, "User found successfully", rest));
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

export const getFavMovies = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                FavMovie: true
            }
        });
        return res.json(responseFormatter(true, 200, "Favourite movies found successfully", user.FavMovie));
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};