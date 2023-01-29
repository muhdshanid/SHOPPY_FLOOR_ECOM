import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

export const cloudinaryUploadImg = async (fileToUploads)=> {
    return new Promise((resolve,reject)=> {
        cloudinary.uploader.upload(fileToUploads,(result)=>{
            resolve({
                url:result.secure_url,
                asset_id:result.asset_id,
                public_id:result.public_id
            },{
                resource_type:"auto"
            })
        })
    })
}
export const cloudinaryDeleteImg = async (fileToDelete)=> {
    return new Promise((resolve,reject)=> {
        cloudinary.uploader.destroy(fileToDelete,(result)=>{
            resolve({
                url:result.secure_url,
                asset_id:result.asset_id,
                public_id:result.public_id
            },{
                resource_type:"auto"
            })
        })
    })
}