import { Request, Response } from "express";
import { userValidationSchema } from "./user.validation";
import { UserServices } from "./user.service";

const createUSerController = async (req: Request, res: Response) => {
    try {
        const user = req.body;
    const zodparseData = userValidationSchema.parse(user);
   
    const result = await UserServices.createUser(zodparseData);
res.status(200).json({
    success: true,
    message: "User created successfully",
    data: result
})
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error instanceof Error ? error.message : 'An unknown error occurred',
    })



}
}  

export const UserController = {
    createUSerController
}