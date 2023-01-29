import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
var brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
},{
    timestamps:true
});

const BrandModel = mongoose.model('Brand', brandSchema);

export default BrandModel