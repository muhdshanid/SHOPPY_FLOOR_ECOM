import asyncHandler from "express-async-handler";
import ProductModel from "../models/ProductModel.js";
import slugify from "slugify";
import OrderModel from '../models/OrderModel.js'
import UserModel from "../models/UserModel.js";
import ReviewModel from "../models/ReviewModel.js";
export const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const newProduct = await ProductModel.create(req.body);
    return res.status(200).json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});
export const getAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await ProductModel.findById(id).populate("reviews");
    if (!findProduct) {
      return res.status(400).json("Product not found");
    }
    return res.status(200).json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});
export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const allproducts = await ProductModel.find({})
    return res.status(200).json(allproducts);
  } catch (error) {
    throw new Error(error);
  }
});
export const getCategoryProducts = asyncHandler(async (req, res) => {
  const { name } = req.params;
  try {
    const catProducts = await ProductModel.find({category:name});
    return res.status(200).json(catProducts);
  } catch (error) {
    throw new Error(error);
  }
});
export const getSearchProducts = asyncHandler(async (req, res) => {
  const { keyword } = req.params;
  try {
    const result = await ProductModel.find({name:{$regex : `${keyword}` , $options:"i"}}).where("stock").gt(0).sort({updatedAt:-1})
    return res.status(200).json(result);
  } catch (error) {
    throw new Error(error);
  }
});
export const getPopularProducts = asyncHandler(async (req, res) => {
  try {
    const popularProducts = await ProductModel.aggregate([{
      $sample:{size:4}
    }])
    return res.status(200).json(popularProducts);
  } catch (error) {
    throw new Error(error);
  }
});
export const getHeadphoneProducts = asyncHandler(async (req, res) => {
  try {
    const headphones = await ProductModel.find({category:"headphones"}).limit(4)
    return res.status(200).json(headphones);
  } catch (error) {
    throw new Error(error);
  }
});
export const getBrandsProducts = asyncHandler(async (req, res) => {
  const { name } = req.params;
  try {
    const brandProducts = await ProductModel.find({brand:name});
    return res.status(200).json(brandProducts);
  } catch (error) {
    throw new Error(error);
  }
});
export const updateProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const { id } = req.params;
    const updateProduct = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    return res.status(200).json("Product deleted successfully");
  } catch (error) {
    throw new Error(error);
  }
});

export const getFilteredProducts = asyncHandler(async(req,res) => {
  try {
    const {category,brand,price,rating} = req.params
    const ascendingOrDescending = price == -1 ? -1 : 1
    const star = rating == 0 ? {$exists: true} : rating
    const trimCat = category.trim()
    const filteredProducts = await ProductModel.find({category:trimCat,brand,totalRatings:star})
    .sort({discountPrice:ascendingOrDescending})
    return res.status(200).json(filteredProducts)
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
})
export const askQuestion = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { proId,question } = req.body;
    const user = await UserModel.findById(_id);
    const isUserOrdered = await OrderModel.findOne({userId:_id,productId:proId})
    if(isUserOrdered){
      const product = await ProductModel.findByIdAndUpdate(
        proId,
          {
            $push: {
              questions: {
                question,
                askedUserName:user.name,
                askedBy:user._id,
                certifiedBuyer:true
              },
            },
          },
          { new: true }
      )
    }else{
      const product = await ProductModel.findByIdAndUpdate(
        proId,
          {
            $push: {
              questions: {
                question,
                askedUserName:user.name,
                askedBy:user._id,
                certifiedBuyer:false
              },
            },
          },
          { new: true }
      )
    }
    return res.status(200).json(product)
  } catch (error) {
    throw new Error(error);
  }
});
export const likeQuestion = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const {button,proId,qId} = req.body
    const product = await ProductModel.findById(proId)
    const question = product.questions.find(item => item._id.toString() === qId)
    if (question.likes.includes(_id)) {
      if(button === "dislike"){
        const dislike = await ProductModel.findOneAndUpdate({
          _id: proId,
          "questions._id": qId
        }, { $push: { "questions.$.dislikes": _id } }, { new: true });
        const liked = await ProductModel.findOneAndUpdate({
          _id: proId,
          "questions._id": qId
        }, { $pull: { "questions.$.likes": _id } }, { new: true });
        return res.status(200).json(liked);
      }else{
        const liked = await ProductModel.findOneAndUpdate({
          _id: proId,
          "questions._id": qId
        }, { $pull: { "questions.$.likes": _id } }, { new: true });
        return res.status(200).json(liked);
      }
    } else if(question.dislikes.includes(_id)){
      if(button === "like"){
        const dislike = await ProductModel.findOneAndUpdate({
          _id: proId,
          "questions._id": qId
        }, { $pull: { "questions.$.dislikes": _id } }, { new: true });
        const liked = await ProductModel.findOneAndUpdate({
          _id: proId,
          "questions._id": qId
        }, { $push: { "questions.$.likes": _id } }, { new: true });
        return res.status(200).json(liked);
      }else{
        const dislike = await ProductModel.findOneAndUpdate({
          _id: proId,
          "questions._id": qId
        }, { $pull: { "questions.$.dislikes": _id } }, { new: true });
        return res.status(200).json(dislike);

      }
    }
      else if(!question.likes.includes(_id)){
        if(button === "like"){
          const liked = await ProductModel.findOneAndUpdate({
            _id: proId,
            "questions._id": qId
          }, { $push: { "questions.$.likes": _id } }, { new: true });
          return res.status(200).json(liked);
        }else{
          const disliked = await ProductModel.findOneAndUpdate({
            _id: proId,
            "questions._id": qId
          }, { $push: { "questions.$.dislikes": _id } }, { new: true });
          return res.status(200).json(disliked);
        }
      }
  } catch (error) {
    throw new Error(error.stack);
  }
});
export const likeReview = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { id } = req.params;
    const {button} = req.body
    const review = await ReviewModel.findById(id)
    if (review.likes.includes(_id)) {
      if(button === "dislike"){
        const dislike = await ReviewModel.findByIdAndUpdate(id,{ $push: { dislikes: _id } },{new:true});
        const liked = await ReviewModel.findByIdAndUpdate(id,{ $pull: { likes: _id } },{new:true});
        return res.status(200).json(liked);
      }else{
        const liked = await ReviewModel.findByIdAndUpdate(id,{ $pull: { likes: _id } },{new:true});
        return res.status(200).json(liked);
      }
    } else if(review.dislikes.includes(_id)){
      if(button === "like"){
        const dislike = await ReviewModel.findByIdAndUpdate(id,{ $pull: { dislikes: _id } },{new:true});
        const liked = await ReviewModel.findByIdAndUpdate(id,{ $push: { likes: _id } },{new:true});
        return res.status(200).json(liked);
      }else{
        const dislike = await ReviewModel.findByIdAndUpdate(id,{ $pull: { dislikes: _id } },{new:true});
        return res.status(200).json(dislike);

      }
    }
      else if(!review.likes.includes(_id)){
        if(button === "like"){
          const liked = await ReviewModel.findByIdAndUpdate(id,{ $push: { likes: _id } },{new:true});
          return res.status(200).json(liked);
        }else{
          const disliked = await ReviewModel.findByIdAndUpdate(id,{ $push: { dislikes: _id } },{new:true});
          return res.status(200).json(disliked);
        }
      }
  } catch (error) {
    throw new Error(error);
  }
});
export const reviewProduct = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { star, proId ,comment,images} = req.body;
    const user = await UserModel.findById(_id)
    const isUserOrdered = await OrderModel.findOne({userId:_id,productId:proId})
    if(!isUserOrdered){
      return res.status(400).json({msg:"Only ordered user can review product"})
    }
    const alreadyReviewed = await ReviewModel.findOne({postedBy:user._id,productId:proId})
    if (alreadyReviewed) {
      const updateReview = await ReviewModel.findByIdAndUpdate(alreadyReviewed._id,
        {
          $set:{star,comment,images,}
        },{new:true});
    } else {
      const reviewProduct = await ReviewModel.create(
        {
          star,
          images,
          postedBy:user._id,
          postedUserName:user.name,
          productId:proId,
          comment
        }
      );
      await ProductModel.findByIdAndUpdate(proId,{$push:{reviews:reviewProduct._id}}) 
    }
    const getAllRatings = await ProductModel.findById(proId).populate("reviews")
    let totalRating = getAllRatings.reviews.length
    let ratingSum = getAllRatings.reviews.map(item => item.star).reduce((prev,curr)=> prev+curr,0)
    let actualRating = Math.round(ratingSum / totalRating)
    let finalProduct = await ProductModel.findByIdAndUpdate(proId,{
       totalRatings:actualRating
    },{new:true})
    return res.status(200).json(finalProduct)
  } catch (error) {
    throw new Error(error);
  }
});


