import { Schema, model } from 'mongoose';
import { Tbooking } from './booking.interface';



const bookingSchema = new Schema<Tbooking>(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    slotId: { type: Schema.Types.ObjectId, ref: 'Slot', required: true },
    vehicleType: {
      type: String,
      enum: [
        'car',
        'truck',
        'SUV',
        'van',
        'motorcycle',
        'bus',
        'electricVehicle',
        'hybridVehicle',
        'bicycle',
        'tractor',
      ],
      required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true }
);

export const BookingModel = model<Tbooking>('Booking', bookingSchema);