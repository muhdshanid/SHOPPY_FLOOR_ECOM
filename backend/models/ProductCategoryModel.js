import mongoose from 'mongoose'

var productCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
},{
    timestamps:true
});

const ProductCategoryModel = mongoose.model('ProductCategory', productCategorySchema);

export default ProductCategoryModel