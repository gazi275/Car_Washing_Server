import { NextFunction, Request, Response } from "express";
import config from "../App/config";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: JwtPayload;
}

// 👇 এই middleware কে parameterized করা হয়েছে যাতে user & admin উভয়ের জন্য কাজ করে
export const auth = (roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction): void => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        res.status(401).json({ message: "Unauthorized: No token provided" });
        return;
      }

      const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;

      if (!roles.includes(decoded.role)) {
        res.status(403).json({ message: `Forbidden: Only ${roles.join(" or ")} allowed` });
        return;
      }

      req.user = decoded; // ✅ Middleware থেকে req.user সেট করে দেওয়া হলো
      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
};
