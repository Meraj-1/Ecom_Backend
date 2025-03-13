import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieparser from "cookie-parser"
dotenv.config()

const app = express()

app.use(
    cors({
      origin: "http://localhost:5173", // Allow frontend URL
      methods: "GET,POST,PUT,DELETE",
      credentials: true, // Allow cookies if needed
    })
  );
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieparser())

//routes import 
import userRouter from "./routes/user.routes.js"



app.use("/user", userRouter)

export { app }