import mongoose from "mongoose";

var productSchema = new mongoose.Schema(
  {
    title: {
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
    quantity: {
      type: Number,
      required: true,
    },
    images:[
      {
        public_id:String,
        url:String
      }
    ],
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
    ratings: [
      {
        star: Number,
        comment:String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
