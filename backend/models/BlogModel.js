import mongoose from "mongoose";
var blogShema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numViews:{
        type:Number,
        default:0
    },
    isLiked:{
        type:Boolean,
        default:false
    },
    isDisliked:{
        type:Boolean,
        default:false
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }
    ],
    dislikes:[
        {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }
    ],
    image:{
        type:String,
        default:"https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
    },
    author:{
        type:String,
        default:"Admin"
    },
    images:[]
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
});

const BlogModel = mongoose.model('Blog', blogShema);
export default BlogModel