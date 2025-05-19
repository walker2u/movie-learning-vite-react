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