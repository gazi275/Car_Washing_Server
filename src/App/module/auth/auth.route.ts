import { Router } from "express";
import { LoginUser } from "./auth.controller";


const router = Router();
router.post('/auth/login',LoginUser);



export const userLogin= router;