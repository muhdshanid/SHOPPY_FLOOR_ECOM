import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
var brandSchema = new mongoose.Schema({
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

const BrandModel = mongoose.model('Brand', brandSchema);

export default BrandModel