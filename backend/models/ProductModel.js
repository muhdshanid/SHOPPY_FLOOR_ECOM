import mongoose from "mongoose";

var productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    discount:Number,
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required:true
    },
    stock: {
      type: Number,
      required: true,
    },
    sizes:[],
    images:[],
    tags:String,
    colors:[],
    brand: {
      type: String,
      required:true
    },
    totalRatings: {
      type: String,
      default:0
    },
    sold: {
      type: Number,
      default: 0,
    },
    questions:[
      {
        question:String,
        askedBy:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
        answer:String,
        likes:[],
        dislikes:[]
      }
    ],
    specifications:[],
    ratings: [
      {
        star: Number,
        comment:String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        images:[]
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
