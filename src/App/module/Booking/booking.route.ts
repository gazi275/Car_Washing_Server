import { Router } from "express";
import { bookingController } from "./booking.controller";
import { auth } from "../../../mildleware/authorizationJwt";

const router = Router();
router.post('/bookings', auth(['user']), bookingController.createBooking);
router.get('/bookings', bookingController.getBookingController);
router.get('/bookings/:id', bookingController.getBookingController);
export const booking = router;