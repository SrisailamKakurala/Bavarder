import { Request, Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface LoginPayloadType {
    name: string;
    email: string;
    provider: string;
    image?: string;
    oauth_id: string;
}

class AuthController {
    static async login(req: Request, res: Response): Promise<Response> {
        try {
            const body:LoginPayloadType = req.body;
            const findUser = await prisma.user.findUnique({
                where: {
                    email: body.email
                }
            });
            if (!findUser) {
                const user = await prisma.user.create({
                    data: body
                });
                res.status(200).json({
                    message: "User created successfully",
                    user
                });
            }

            let JWTPayload = {
                name: body.name,
                email: body.email,
                id: findUser.id
            }

            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET as string, {
                expiresIn: "1h"
            });

            return res.status(200).json({
                message: "User logged in successfully",
                user: {
                    ...findUser,
                    token: `Bearer ${token}`
                }
            })

        } catch (error) {
            return res.status(500).json({
                message: "Internal server error, Please Try again later",
                error
            })
        }
    }
}

export default AuthController;