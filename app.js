import express from "express"
import router from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from 'dotenv';
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleWare/error.js";
import cors from "cors"
export const app = express()
config({
    path:"./data/config.env"
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}))
app.use("/api/v1/users",router)
app.use("/api/v1/task",taskRouter)
app.get("/",(req,res) => {
    res.send("Hii")
})
app.use(errorMiddleware)
