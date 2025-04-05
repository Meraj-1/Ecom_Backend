// import dotenv from "dotenv";
// // import {app} from "./app.js"
// // import express from "express";
// // const app = express();
// import { app } from "./app.js"; 
// import connectDB from "./db/index.js";

// dotenv.config({
//   path: "./.env",
// });

// connectDB()
// .then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`App is listening on ${process.env.PORT}`);
//   });
// })
// .catch((error) => {
//   console.log("DATABASE CONNECTION ERROR",error);
// });
// // (async () => {
// //   try {
// //     const connectionInstance = await mongoose.connect(
// //       `${process.env.MONGO_URL}/${DB_NAME}`
// //     );
// //     console.log(`Connected to MongoDB ${connectionInstance.connection.host}`);
// //     app.on("error", (error) => {
// //       console.log(error);
// //       throw error;
// //     });

// //     app.listen(process.env.PORT, () => {
// //       console.log(`App is listening on ${process.env.PORT}`);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// })();


import dotenv from "dotenv";
// import {app} from "./app.js"
// import express from "express";
// const app = express();
import { app } from "./app.js";
import connectDB from "./db/index.js";
import mongoose from "mongoose";

dotenv.config({
  path: "./.env",
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on ${process.env.PORT}`);
});

(async () => {
  try {
    const connectionInstance = await mongoose.connect(`
      ${process.env.MONGO_URL}
      
    `);
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
