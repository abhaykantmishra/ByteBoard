import mongoose from "mongoose";

const videoSchema  = new mongoose.Schema(
    {
        owner:{
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
        },
        likes:{
            type:Number,
            default:0,
        },
        dislikes:{
            type:Number,
            default:0,
        },
        comments:{
            type:mongoose.Types.ObjectId,
            ref:"Comment",
            required:true,
        },
        views:{
            type:Number,
            defualt:0,
        },
        videofile:{
            type:String, // cloudinary url
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        }
    },
    {
        timestamps:true
    }
)