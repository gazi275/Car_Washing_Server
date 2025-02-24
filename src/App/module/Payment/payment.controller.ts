
import catchAsync from "../../../utilis/catchAsync";
import { paymentSchema } from "./payment.validation";
import { PaymentService } from "./payment.services";
import sendResponse from "../../../utilis/sendResponse";
import { AuthenticatedRequest } from "../../../mildleware/authenticaterequest";
import { user } from './../user/user.route';
import { Types } from "mongoose";

const payment= catchAsync(async (req:AuthenticatedRequest,res) => {
   const paymentData = req.body;
   const user = req.user?.id;
 if (!user) {
    throw new Error('Unauthorized');
  }
 
   const parseData = paymentSchema.parse(paymentData);
 const completeData = {
        ...parseData,
        user: new Types.ObjectId(user),
        booking: new Types.ObjectId(parseData.booking)
    };


   const result = await PaymentService.createPAyment(completeData);
   sendResponse(res,{status:200,message:"Payment done successfully", data: {
    paymentIntent: result.paymentIntent,
    paymentRecord: result.paymentRecord, // Mongoose document
  },success:true})     
})

export const PaymentController = {
    payment} ;