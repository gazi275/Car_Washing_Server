import { Router } from "express";
import { auth } from "../../../mildleware/authorizationJwt";
import { SlotController } from "./slot.controller";

const router = Router();
router.post('/services/slots',auth(['admin']), SlotController.createSlot);
router.get('/services/slots/availability', SlotController.getAllSlots);
export const slot = router;