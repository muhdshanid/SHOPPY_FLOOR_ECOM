import mongoose from 'mongoose'

var productCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        public_id:String,
        url:String
      }
},{
    timestamps:true
});

const ProductCategoryModel = mongoose.model('ProductCategory', productCategorySchema);

export default ProductCategoryModel