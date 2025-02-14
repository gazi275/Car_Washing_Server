import { z } from 'zod';

export const userValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),

  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z.string({
    required_error: 'Password is required',
  }),
  role: z.enum(['user', 'admin']).default('user'),
  phone: z.string({
    required_error: 'phone is required',
  }),
  address: z.string({
    required_error: 'Address is required',
  }),
});
