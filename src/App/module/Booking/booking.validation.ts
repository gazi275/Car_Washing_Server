import { custom, z } from 'zod';

export const bookingValidationSchema = z.object({
 
  serviceId: z.string({ required_error: 'Service ID is required' }),
  slotId: z.string({ required_error: 'Slot ID is required' }),
  vehicleType: z.enum([
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
  ]),
  vehicleBrand: z.string().min(1, 'Vehicle Brand is required'),
  vehicleModel: z.string().min(1, 'Vehicle Model is required'),
  manufacturingYear: z.number().int().min(1900, 'Invalid Year').max(new Date().getFullYear()),
  registrationPlate: z.string().min(1, 'Registration Plate is required'),
});