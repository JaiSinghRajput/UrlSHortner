import connectDB from "./connection.js"
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
connectDB();
app.listen(process.env.PORT,()=>{console.log(`app is listening on http://127.0.0.1:${process.env.PORT}`)})