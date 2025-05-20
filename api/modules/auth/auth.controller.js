import { prisma } from "../../prisma/client.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        return res.status(200).json({
            message: "Login successful",
            data: user
        })
    } catch (error) {
        console.log("Error in login", error);
        res.status(400).json(error.message);
    }
}