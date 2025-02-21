import { Types } from "mongoose";

export type Tbooking = {
    customer: Types.ObjectId;
    serviceId: Types.ObjectId;
    slotId: Types.ObjectId;
    vehicleType: string;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
    createdAt?: Date;
    updatedAt?: Date;
  }