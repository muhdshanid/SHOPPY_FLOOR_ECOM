import asyncHandler from "express-async-handler";
import ProductModel from "../models/ProductModel.js";
import slugify from "slugify";
import UserModel from "../models/UserModel.js";
export const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
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
    const findProduct = await ProductModel.findById(id);
    if (!findProduct) {
      return res.status(400).json("Product not found");
    }
    return res.status(200).json(findProduct);
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
export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    //Filtering
    const queryObj = { ...req.query };
    const excluderFields = ["page", "sort", "limit", "fields"];
    excluderFields.forEach((elem) => delete queryObj[elem]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = ProductModel.find(JSON.parse(queryStr));

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await ProductModel.countDocuments();
      if (skip >= productCount) throw new Error("This page does not exist");
    }
    const product = await query;
    return res.status(200).json(product);
  } catch (error) {
    throw new Error(error);
  }
});
export const addToWishlist = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { proId } = req.body;
    const user = await UserModel.findById(_id);
    const alreadyAdded = user.wishList.find((id) => id.toString() === proId);
    if (alreadyAdded) {
      const user = await UserModel.findByIdAndUpdate(
        _id,
        {
          $pull: { wishList: proId },
        },
        { new: true }
      );
      return res.status(200).json(user);
    } else {
      const user = await UserModel.findByIdAndUpdate(
        _id,
        {
          $push: { wishList: proId },
        },
        { new: true }
      );
      return res.status(200).json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});
export const rating = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { star, proId ,comment} = req.body;
    const product = await ProductModel.findById(proId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await ProductModel.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        { $set: { "ratings.$.star": star,"ratings.$.comment": comment } },{
            new:true
        }
        );
    } else {
      const rateProduct = await ProductModel.findByIdAndUpdate(
        proId,
        {
          $push: {
            ratings: {
              star,
              comment,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }
    const getAllRatings = await ProductModel.findById(proId)
    let totalRating = getAllRatings.ratings.length
    let ratingSum = getAllRatings.ratings.map(item => item.star).reduce((prev,curr)=> prev+curr,0)
    let actualRating = Math.round(ratingSum / totalRating)
    let finalProduct = await ProductModel.findByIdAndUpdate(proId,{
       totalRatings:actualRating
    },{new:true})
    return res.status(200).json(finalProduct)
  } catch (error) {
    throw new Error(error);
  }
});

