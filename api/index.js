import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

import userRouter from "./routers/user.router.js"

dotenv.config()
const app = express();

mongoose.connect("mongodb+srv://tejas8ydv:I1WJ0l9Z6bBIvSWK@real-state-cluster.4thlzva.mongodb.net/?retryWrites=true&w=majority&appName=real-state-cluster")

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
  app.get
});

app.use("/api/user",userRouter)