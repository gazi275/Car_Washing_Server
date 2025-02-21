
import catchAsync from "../../../utilis/catchAsync";
import { bookingValidationSchema } from "./booking.validation";

import { BookingService } from "./booking.services";
import sendResponse from "../../../utilis/sendResponse";

const createBooking = catchAsync(async (req, res) => {
    const bookingData = req.body;
   
   
    const parsedData = bookingValidationSchema.parse(bookingData);
    
    const completeData = {
        ...parsedData,
        customer: req.body.customer,
        serviceId: req.body.serviceId,
        slotId: req.body.slotId
    };
    
    const result = await BookingService.bookingservice(completeData);
    sendResponse(res, {
        success: true,
        data: result,
        status: 201,
        message: 'Booking created successfully'
    });
});

const getBookingController = catchAsync(async (req, res) => {
    const result = await BookingService.getBooking();
    sendResponse(res, {
        success: true,
        data: result,
        status: 200,
        message: 'All booking fetched successfully'
    });
}
);

const getUserBookingController = catchAsync(async (req, res) => {
    
});

export const bookingController = {
    createBooking ,
    getBookingController};