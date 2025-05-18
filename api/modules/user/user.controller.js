import { prisma } from "../../prisma/client.js";

export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.create({
            data: {
                email: email,
                password: password
            }
        });
        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

export const getUserById = async (req, res) => {
    try {
        let { id } = req.params;
        id = Number(id);
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};