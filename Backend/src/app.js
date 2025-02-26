import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieparser from "cookie-parser"
dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.CORS_ORGIN,
    credentials: true,
}))
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieparser())

//routes import 
import userRouter from "./routes/user.routes.js"



app.use("/user", userRouter)

export { app }