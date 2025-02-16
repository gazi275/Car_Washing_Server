
import catchAsync from "../../../../utilis/catchAsync";
import sendResponse from "../../../../utilis/sendResponse";
import { userLoginService } from "./auth.services";
import { loginUserValidationSchema } from "./auth.validation";

 export const LoginUser = catchAsync(async (req, res,  next) => {
    const userLogin = req.body; 
    const perseData = loginUserValidationSchema.parse(userLogin); 
    const result = await userLoginService(perseData);
    sendResponse(res,{
        status:200,
        message:"User login successfully",
        data:result,
        success:true
    })

})