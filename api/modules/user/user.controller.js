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
        const favMovieArray = req.body.FavMovie;
        const movieDetails = [];
        for (let i = 0; i < favMovieArray.length; i++) {
            const url = `https://${RAPID_API_HOST}/anime/by-id/${favMovieArray[i]}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'x-rapidapi-key': RAPID_API_KEY,
                    'x-rapidapi-host': RAPID_API_HOST
                }
            });
            const result = await response.text();
            movieDetails.push(result);
        }
        return res.json(responseFormatter(true, 200, "Favourite movies found successfully", movieDetails));
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};