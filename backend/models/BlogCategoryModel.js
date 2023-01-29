import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
var blogCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
},{
    timestamps:true
});

const CategoryModel = mongoose.model('BlogCategory', blogCategorySchema);

export default CategoryModel