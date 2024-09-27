import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId : {
        required:true,
        type : String,
        unique:true

    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp : {type:Number}}]
},{timestamps:true});

export const URL = mongoose.model("url",urlSchema);
