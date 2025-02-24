import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config({
  path: "./.env",
});
(async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(`Connected to MongoDB ${connectionInstance.connection.host}`);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
