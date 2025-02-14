import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();
router.post('/auth/signup', UserController.createUSerController);



export const user= router;