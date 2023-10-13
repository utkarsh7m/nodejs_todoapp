import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
export const isAuthenticated = async(req,res,next) => {
    const {token} = req.cookies
    if (!token){
        res.status(404).json({
            success:false,
            message:"Login First"})
    }
    const decoded = jwt.verify(token,process.env.JWTSECRET)
    req.user =  await User.findById(decoded._id);
    next()

}