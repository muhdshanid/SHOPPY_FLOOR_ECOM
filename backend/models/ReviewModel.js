import {Schema,model,Types} from 'mongoose'

const reviewSchema = new Schema({
    star:{
        type:Number,
        default:1,
    },
    comment:{
        type:String,
    },
    productId:{
        type:Types.ObjectId,
        ref:"Product",
    },
    images:[],
    likes:[],
    dislikes:[],
    postedUserName:String,
    postedBy: { type: Types.ObjectId ,ref:"User" },
},{
    timestamps:true
})

const ReviewModel = model("Review",reviewSchema)

export default ReviewModel