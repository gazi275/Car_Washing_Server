import { Schema, model } from 'mongoose';
import {  IUser } from './user.interface';
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'Employee'],
        default: 'user'
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const user = this 
    user.password = await bcrypt.hash(user.password, 12);
    next();
})


userSchema.post('save', function ( doc: any, next: any) {
    doc.password = '';
    next();
});

export const User = model<IUser>('User', userSchema);