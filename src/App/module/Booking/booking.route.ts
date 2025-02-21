import { Router } from "express";
import { bookingController } from "./booking.controller";

const router = Router();
router.post('/bookings', bookingController.createBooking);
router.get('/bookings', bookingController.getBookingController);
router.get('/bookings/:id', bookingController.getBookingController);
export const booking = router;