import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
var enqSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"Submitted",
        enum:["Submitted","Contacted","In Progress"]
    },
},{
    timestamps:true
});

const EnquiryModel = mongoose.model('Enquiry', enqSchema);

export default EnquiryModel