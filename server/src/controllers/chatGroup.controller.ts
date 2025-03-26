import { Request, Response } from "express"
import prisma from "../config/db.config.js";

class ChatGroupController {
    static async store(req: Request, res: Response) {
        try {
            const body = req.body;
            const user = req.user;

            await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: Number(user.id),
                }
            })

            return res.status(200).json({message: "chat group created successfully!"});
        } catch (error) {
            res.status(500).json({message: "something went wrong, please try again!"});
        }
    }
}

export default ChatGroupController;