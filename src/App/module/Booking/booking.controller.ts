
import catchAsync from "../../../utilis/catchAsync";
import { bookingValidationSchema } from "./booking.validation";

import { BookingService } from "./booking.services";
import sendResponse from "../../../utilis/sendResponse";

import { AuthenticatedRequest } from "../../../mildleware/authenticaterequest";
import { Types } from "mongoose";

const createBooking = catchAsync(async (req:AuthenticatedRequest, res) => {
    const bookingData = req.body;
    const customer = req.user?.id;
    if (!customer) {
        throw new Error('Unauthorized');
    }
   
   
    const parsedData = bookingValidationSchema.parse(bookingData);
    
    const completeData = {
        ...parsedData,
        customer: new Types.ObjectId(customer),
        serviceId: new Types.ObjectId(parsedData.serviceId),
        slotId: new Types.ObjectId(parsedData.slotId)
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