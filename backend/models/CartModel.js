import mongoose from 'mongoose'
var cartSchema = new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            count:Number,
            color:String,
            price:Number,
        }
    ],
    cartTotal:Number,
    totalAfterDiscount:Number,
    orderBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{
    timestamps:true
});



const CartModel = mongoose.model('Cart', cartSchema);

export default CartModel