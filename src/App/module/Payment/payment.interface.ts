import mongoose from "mongoose";

export type TPayment = {
  user: mongoose.Schema.Types.ObjectId;
  booking: mongoose.Schema.Types.ObjectId;
  amount: number;
  status: "pending" | "completed" | "failed";
  paymentIntentId: string;
 
}