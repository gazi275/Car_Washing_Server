import { Router } from "express";
import { auth } from "../../../mildleware/authorizationJwt";
import { SlotController } from "./slot.controller";

const router = Router();
router.post('/services/slots',auth, SlotController.createSlot);
export const slot = router;