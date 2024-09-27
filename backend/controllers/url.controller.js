import { URL } from "../models/url.model.js"
import { nanoid } from "nanoid";

async function handleCreateShortUrl(req , res ){
    const url = req.body?.url;
    const shortid = nanoid(8);
    if(url)
    {
       const urlres = await URL.create({
            shortId : shortid,
            redirectURL:url,
        })
        if(!urlres) return res.status(501).json({error:"enternal server error"})
    }
    else{
    return res.status(400).json({error : "Url Required"})
    }
    return res.status(201).json({msg: "created",shortid})
}

async function handleRedirectUrl(req , res ){
    const uid = req.params.id
    const url = await URL.findOneAndUpdate({shortId:uid},{
        $push:{visitHistory:{timestamp:Date.now()}}
    })
    if(!url) return res.status(401).json({error:"no url found"})
    return res.redirect(url.redirectURL)
}

async function handleGetAnalytics(req , res ){
    const uid = req.params.id;
    const url = await URL.findOne({shortId:uid})
    if(!url) return res.json({error:`no Url Found by id : ${uid}`})
    return res.status(200).json({ShortId : uid,originalURL : url.redirectURL,totalVisits : url.visitHistory.length})
}
async function handleGetAllUrls(req , res ){
    const urls = await URL.find({})
    if(!urls) return res.status(401).json({error:`no Url Found in db`})
    return res.status(200).json({urls:urls})
}


function defaultRes(req , res)
    {
    return res.status(200).json({SuccessFUll:"Respose is OK Server is Running good"})
    }
export {handleCreateShortUrl,handleGetAnalytics,handleRedirectUrl,handleGetAllUrls,defaultRes}