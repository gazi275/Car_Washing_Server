import { Request, Response } from 'express';
import { SlotService } from './slot.services';
import { slotSchemaValidation } from './slot.validation';
import { Types } from 'mongoose';
import sendResponse from '../../../utilis/sendResponse';
import catchAsync from '../../../utilis/catchAsync';
 // Assuming you have this helper

const createSlot = catchAsync(async (req: Request, res: Response) =>{
    const slotData = req.body;

    // Validate input data
    const parsedData = slotSchemaValidation.parse(slotData);

    // Transform string to ObjectId
    const transformedData = {
      ...parsedData,
      service: new Types.ObjectId(parsedData.service),
    };

    // Pass to Service
    const result = await SlotService.createSlot(transformedData);

    sendResponse(res, {
      success: true,
      data: result,
      status: 201,
      message: 'Slot created successfully',
    });
  } 
 )

    

export const SlotController = {
  createSlot};
