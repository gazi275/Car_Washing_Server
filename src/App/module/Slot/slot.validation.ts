import { z } from 'zod';

 export const slotSchemaValidation = z.object({
  service: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid MongoDB ObjectId'), 
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)'),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)'),
  isBooked: z.enum(['available', 'booked', 'canceled']).default('available'),
});