import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema<TSlot>({
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/ },
    startTime: { type: String, required: true, match: /^([01]\d|2[0-3]):([0-5]\d)$/ },
    endTime: { type: String, required: true, match: /^([01]\d|2[0-3]):([0-5]\d)$/ },
    isBooked: { type: String, enum: ['available', 'booked', 'canceled'], required: true,default: 'available' }
}, 
{ 
    timestamps: true
  
});
  
  export const SlotModel = model<TSlot>('Slot', slotSchema);