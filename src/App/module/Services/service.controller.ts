import catchAsync from "../../../utilis/catchAsync";
import sendResponse from "../../../utilis/sendResponse";
import { Tservices } from "./service.interface";
import { services } from "./service.services";
import { serviceValidationSchema } from "./service.validation";

const createService= catchAsync(async(req,res,next)=>{
    const service = req.body;
    const parsedata = serviceValidationSchema.parse(service)
    const result = await services.creatservice(parsedata)
    sendResponse(res,
        {success:true,
        data:result,
        status:201,
        message:'Service created successfully'})

})

const getAllserviceController = catchAsync(async(req,res,next)=>{
    const result = await services.getAllServices()
    sendResponse(res,
        {success:true,
        data:result,
        status:200,
        message:'All services fetched successfully'})
})

const getSingleService = catchAsync(async(req,res,next)=>{
    const id = req.params.id
    const result = await services.getSingleservice(id)
    sendResponse(res,
        {success:true,
        data:result,
        status:200,
        message:'Service fetched successfully'})
})
const updateService = catchAsync(async(req,res,next)=>{
    const id = req.params.id
    const service:Partial<Tservices> = req.body
  
    const result = await services.updateService(id,service)
    sendResponse(res,
        {success:true,
        data:result,
        status:200,
        message:'Service updated successfully'})
})

const deleteService = catchAsync(async(req,res,next)=>{
    const id = req.params.id
    const result = await services.deleteService(id)
    sendResponse(res,
        {success:true,
        data:result,
        status:200,
        message:'Service deleted successfully'})
})

export const ServiceController = {
    createService,
    getAllserviceController,
    getSingleService,
    updateService,
    deleteService}