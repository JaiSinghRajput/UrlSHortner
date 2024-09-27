import { Router } from "express";
import {handleCreateShortUrl , 
    handleGetAnalytics , 
    handleRedirectUrl,
    handleGetAllUrls,
    defaultRes} 
from "../controllers/url.controller.js"
const router = Router();
router.get("/helthcheck",defaultRes);
router.post("/",handleCreateShortUrl)
router.get("/:id",handleRedirectUrl)
router.get("/status/:id",handleGetAnalytics)
export default router;