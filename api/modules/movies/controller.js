import { responseFormatter } from "../../helper/responseFormatter.js";
import { prisma } from "../../prisma/client.js";
import dotenv from "dotenv";
dotenv.config();

const RAPID_API_HOST = process.env.RAPID_API_HOST;
const RAPID_API_KEY = process.env.RAPID_API_KEY;

export const getTrendingMovies = async (req, res) => {
    try {
        const url = `https://${RAPID_API_HOST}/anime?page=1&size=12&sortBy=ranking&sortOrder=asc`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': RAPID_API_HOST
            }
        });
        const result = await response.json();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}
export const addToFavorites = async (req, res) => {
    try {
        const { _id, title, synopsis, image, status, ranking } = req.body;
        const userId = req.userId;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if (user) {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    FavMovie: {
                        create: {
                            id: Number(_id),
                            title,
                            synopsis,
                            image,
                            status,
                            ranking
                        }
                    }
                }
            });
        }
        res.json(responseFormatter(true, 200, "Movie added to favorites"));
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}