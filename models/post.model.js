import mongoose, { mongo } from "mongoose";


const TagSchema = new mongoose.Schema({name : String})

const PostSchema = new mongoose.Schema(
    {   
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        tags: [String],
    },
    {
        timestamps : true
    }
);



export const Tag = mongoose.model("Tag", TagSchema);
export const Post = mongoose.model("Post", PostSchema);
