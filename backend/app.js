import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import urlRouter from "./routes/url.route.js"
// import userRouter from "./routes/user.route.js"
import {defaultRes, handleGetAllUrls} from "./controllers/url.controller.js"
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
dotenv.config()
app.use(cors({
    origin : process.env.ORIGIN
}))
app.use("/api/url",urlRouter)
// app.use("/api/url",userRouter)
app.get("/",defaultRes)
app.get("/getall",handleGetAllUrls)

export default app;