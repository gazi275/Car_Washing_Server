import { model, Schema } from "mongoose";
import { TPayment } from "./payment.interface";

const PaymentSchema = new Schema<TPayment>(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      booking: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
      amount: { type: Number, required: true },
      status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
      paymentIntentId: { type: String, required: true },
    
    },
    { timestamps: true }
  );
  
  export const PaymentModel= model <TPayment>("Payment", PaymentSchema);