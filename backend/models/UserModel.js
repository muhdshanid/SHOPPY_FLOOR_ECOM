import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
    },
    refreshToken:{
        type:String,
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    cart:{
        type:Array,
        default:[]
    },
    passwordChagedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date,
    address:{type:String},
    wishList:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}],
},{
    timestamps:true
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.createPasswordResetToken = async function(){
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 30*60*1000 // 10 minutes
    return resetToken
}


const UserModel = mongoose.model('User', userSchema);

export default UserModel