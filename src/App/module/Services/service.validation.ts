import { z } from 'zod';

export const serviceValidationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    price: z.number().positive('Price must be a positive number'),
    duration: z.number().int().positive('Duration must be a positive integer'),
    isDeleted: z.boolean().default(false),
  });