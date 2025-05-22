import { prisma } from "../../prisma/client.js";
import { responseFormatter } from "../../helper/responseFormatter.js";

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