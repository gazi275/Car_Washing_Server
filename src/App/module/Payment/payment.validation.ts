import { z } from "zod";
import mongoose from "mongoose";

export const paymentSchema = z.object({
  user: z
    .instanceof(mongoose.Types.ObjectId)
    .or(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"))
    .refine((val) => mongoose.isValidObjectId(val), { message: "Invalid User ID" }),
    
  booking: z
    .instanceof(mongoose.Types.ObjectId)
    .or(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"))
    .refine((val) => mongoose.isValidObjectId(val), { message: "Invalid Booking ID" }),

  amount: z.number().min(1, "Amount must be at least 1"),
 

 


});

export type TPayment = z.infer<typeof paymentSchema>;
