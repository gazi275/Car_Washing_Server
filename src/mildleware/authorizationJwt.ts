import { NextFunction, Request, Response } from "express";
import config from "../App/config";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: JwtPayload;
}

export const auth = (req: CustomRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
      res.status(401).json({ message: "token nehi hae" });
      return;
    }

    const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
    console.log('sdf',decoded)

    if (decoded.role !== "admin") {
      res.status(403).json({ message: "Forbidden: Admins only" });
      return;
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
