
import { userValidationSchema } from "./user.validation";
import { UserServices } from "./user.service";
import catchAsync from "../../../utilis/catchAsync";
import sendResponse from "../../../utilis/sendResponse";

const createUSerController = catchAsync(async (req,res,next) => {
    
    const user = req.body;
const zodparseData = userValidationSchema.parse(user);

const result = await UserServices.createUser(zodparseData);
sendResponse(res,{
    status:200,
    message:"User created successfully",
    data:result,
    success:true
})  

})



 

export const UserController = {
    createUSerController
}