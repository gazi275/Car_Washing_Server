import { Tbooking } from "./booking.interface";
import { BookingModel } from "./booking.schema";

const bookingservice = async (booking: Tbooking) => {
    const result = await BookingModel.create(booking);
    return result.populate(['customer', 'serviceId', 'slotId']);
}

const getBooking = async ()=>{
    const result = await BookingModel.find().populate(['customer', 'serviceId', 'slotId']);
    return result;
}

export const BookingService = {
    bookingservice,
    getBooking
} ;