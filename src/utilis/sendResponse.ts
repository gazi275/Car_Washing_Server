import { Response } from "express";

type Tresponse<T>={
    status:number,
    message:string,
    data:T,
    success:boolean
}

const sendResponse = <T>(res: Response, data: Tresponse<T>) => {
    
res.status(data.status).json({
    success:data.success,
    message:data.message, 
    data:data.data
})
}
export default sendResponse;