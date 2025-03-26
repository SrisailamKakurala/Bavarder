import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({message: "Authorization token not found"});
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = user as AuthUser;
        next()
    } catch (error) {
        return res.status(401).json({message: "Invalid token"});
    }
}


export default authMiddleware;