import { get } from "lodash";
import { TSlot } from "./slot.interface";
import { SlotModel } from "./slot.model";

const createSlot = async (slot:TSlot) => {
    const { service, date, startTime, endTime, isBooked } = slot; 
    const [starthour, startminute] = startTime.split(':').map(Number);
    const [endhour, endminute] = endTime.split(':').map(Number);
    const starthourtoMinute = starthour * 60 + startminute;
    const endhourtoMinute = endhour * 60 + endminute;

    if (starthourtoMinute > endhourtoMinute || (starthourtoMinute === endhourtoMinute && startminute >= endminute)) {
        throw new Error('End time must be greater than start time');
    }
    const slots = [];

    for (let i = starthourtoMinute; i < endhourtoMinute; i += 60) {
      const startHour = Math.floor(i / 60);
      const startMin = i % 60;
  
      const endHour = Math.floor((i + 60) / 60);
      const endMin = (i + 60) % 60;
  
      slots.push({
        service,
        date,
        startTime: `${startHour.toString().padStart(2, "0")}:${startMin
          .toString()
          .padStart(2, "0")}`,
        endTime: `${endHour.toString().padStart(2, "0")}:${endMin
          .toString()
          .padStart(2, "0")}`,
        isBooked: isBooked ?? false,
      });
    }
  
    const createdSlots = await SlotModel.insertMany(slots);
    return createdSlots;
}

const getAllSlots = async (date:string,serviceId:string) => {
  const query:any = {};
  if (date) {
    query['date'] = date;}
  if (serviceId) {
    query['service'] = serviceId;}

    const slots = await SlotModel.find(query).populate('service')
    
    
    return slots;
}

export const SlotService = {
    createSlot,
    getAllSlots 
} 