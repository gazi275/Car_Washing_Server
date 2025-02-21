import { Tbooking } from "./booking.interface";
import { BookingModel } from "./booking.schema";

const bookingservice = async (booking: Tbooking) => {
    const existingBooking = await BookingModel.findOne({
        customer: booking.customer,
        serviceId: booking.serviceId,
        slotId: booking.slotId
    });

    if (existingBooking) {
        throw new Error("Booking already exists for this slot.");
    }
    const result = await BookingModel.create(booking);
    return result.populate([
        { path: 'customer', select: '-password' }, // ✅ Exclude password field
        { path: 'serviceId' },
        { path: 'slotId' }
    ]);
}

const getBooking = async ()=>{
    const result = await BookingModel.find().populate([
        { path: 'customer', select: '-password' }, // ✅ Exclude password field
        { path: 'serviceId' },
        { path: 'slotId' }
    ]);
    return result;
}

export const BookingService = {
    bookingservice,
    getBooking
} ;