import { Schema, model ,Types} from "mongoose";

const orderSchema = new Schema({
  productId: { type: Types.ObjectId ,ref:"Product" },
  userId: { type: Types.ObjectId ,ref:"User" },
  size:{
    type:String,
    require:false
  },
  color:{
    type:String,
    require:false
  },
  quantities:{
    type:Number,
    require:false
  },
  address:{
    type:Map,
    require:true
  },
  orderStatus:{
    type:String,
    default:"Not Processed",
    enum:["Not Processed","Processed","Dispatched","Cancelled","Delivered"]
},

},{
    timestamps:true
});

const OrderModel = model("Order",orderSchema)

export default OrderModel
