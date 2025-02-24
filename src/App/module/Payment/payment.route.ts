import { Router } from "express";
import { PaymentController } from "./payment.controller";
import { auth } from "../../../mildleware/authorizationJwt";


const router = Router();
router.post('/payment',auth(['admin','user','Employee']), PaymentController.payment);



export const payment= router;