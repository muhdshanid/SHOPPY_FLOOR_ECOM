import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
var colorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
},{
    timestamps:true
});

const ColorModel = mongoose.model('Color', colorSchema);

export default ColorModel