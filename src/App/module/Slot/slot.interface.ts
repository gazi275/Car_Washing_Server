import { Types } from 'mongoose';

type SlotStatus = 'available' | 'booked' | 'canceled';

 export type TSlot = {
  service: Types.ObjectId; 
  date: string; 
  startTime: string; 
  endTime: string; 
  isBooked: SlotStatus;
};
