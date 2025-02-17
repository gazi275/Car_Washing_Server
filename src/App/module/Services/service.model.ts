import { Schema, model } from 'mongoose';
import { Tservices } from './service.interface';
const serviceSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{  type: Number,
        required: true },
    duration:{type: Number,
        required: true},
    isDeleted:{ type: Boolean,  default: false}
},
{ timestamps: true }
); 
export const Service = model<Tservices>('Service', serviceSchema);    