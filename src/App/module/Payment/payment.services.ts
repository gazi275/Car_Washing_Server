import Stripe from "stripe";
import config from "../../config";
import { TPayment } from "./payment.validation";
import { PaymentModel } from "./payment.model";


const stripe = new Stripe(config.stripe_secret as string, {
    apiVersion: '2025-01-27.acacia',
});

const createPAyment = async (data: TPayment): Promise<{ paymentIntent: Stripe.PaymentIntent, paymentRecord: InstanceType<typeof PaymentModel> }> => {
    
    


    const PaymentIntents = await stripe.paymentIntents.create({
        amount: data.amount,
        currency: 'usd',
       payment_method: 'pm_card_visa', 
       payment_method_types: ['card'],
        description: `Payment for booking ${data.booking}`,
        metadata: {
            integration_check: 'accept_a_payment',
            booking: data.booking.toString(),
            user: data.user.toString(),
        },
        confirm: true,
     
    });

    const paymentData ={
        ...data,
        paymentIntentId: PaymentIntents.id,
        status: PaymentIntents.status === "succeeded" ? "completed" : "failed"
    }
   const newPayment = await PaymentModel.create(paymentData);
   return {
    paymentIntent: PaymentIntents,
    paymentRecord: newPayment,  // This is the MongoDB document
  };
};

export const PaymentService = {
    createPAyment  } ; 
