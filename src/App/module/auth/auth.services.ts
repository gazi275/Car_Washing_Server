import config from "../../config";
import { User } from "../user/user.model";
import { iloginUser } from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

 export const userLoginService= async ( userlogin : iloginUser)=>{
    const userExist = await User.findOne({email : userlogin.email})
    if(!userExist){
        throw new Error("User not found")
    }
    const passwordMatch = await bcrypt.compare(userlogin?.password, userExist.password)
    if(!passwordMatch){
        throw new Error("Invalid password")
    }
    const token = jwt.sign({id : userExist._id, role:userExist.role}, config.jwt_secret as string, {expiresIn: '10d'})  
    
    const { password, ...user } = userExist.toObject();

    return {token, user  }
}