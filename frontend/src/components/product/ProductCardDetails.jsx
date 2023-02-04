import React, { useState } from 'react'
import StarRating from '../product/StarRating'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { discount } from '../../utils/discount'
import { useAddToWishlistMutation } from '../../store/services/productServices'

const ProductCardDetails = ({product,description}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const finalPrice = discount(product?.price,product?.discount)
    const [addToWishlist,res] = useAddToWishlistMutation()
    const addToCartFn = () => {
        const {
            colors,sizes,
             createdAt,
             updatedAt,
             tags,
             specifications,
             questions,
             ratings,
             description,
            ...newProduct
          } = product;
          newProduct['size'] = sizes[0]
        newProduct['color'] = colors[0]
        newProduct['quantity'] = quantity
        const cart =  localStorage.getItem("cart")
        const cartItems = cart ? JSON.parse(cart) : []
        const checkItem = cartItems.find(item => item._id === newProduct._id)
        if(!checkItem){
          dispatch(addToCart(newProduct))
          cartItems.push(newProduct)
          localStorage.setItem("cart",JSON.stringify(cartItems))
          console.log("add to localstorage");
        }else{
          alert("already in cart")
          return 
        }
      }
      const wishlistFn = (id) => {
        addToWishlist({proId:id})
      }
  return (
    <div className='flex flex-col my-4  gap-2 relative'>
    <Link to={`/product/${product._id}`} className=' w-full  bg-white rounded-lg '>
        <img src={product.images[0].url} className="bg-gray-200
         transition ease-in-out delay-150
         hover:-translate-y-1 hover:scale-110
         duration-500
         object-cover h-[20rem] w-full rounded-lg" alt="product" />
    </Link>
        <div onClick={()=>wishlistFn(product._id)} 
         className='absolute
         transition ease-in-out delay-150
         hover:-translate-y-1 hover:scale-110 
         duration-300 
          hover:bg-gray-200 cursor-pointer p-2 top-2 right-2 rounded-full bg-gray-100'>
            <AiOutlineHeart   size={20}/>
        </div>
    <div className='flex flex-col gap-4'>
       <div className='flex flex-col'>
       <div className='flex items-center justify-between'>
            <h6 className='font-bold text-lg text-gray-900'>{product.name}</h6>
            <h6 className='font-bold text-lg text-gray-900'>₹{finalPrice}</h6>
        </div>
        <div>
            <p className=' font-semibold text-sm text-gray-400'>{description}</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='flex'>
                <StarRating rating={product.totalRatings}/>
            </div>
            <div>
                <p className=' font-semibold text-lg text-gray-400'>{`(${product.ratings.length})`}</p>
            </div>
        </div>
       </div>
        <div className='flex gap-4 items-center  justify-between'>
        <Link to={`/checkout/${product._id}`} className='bg-green-900 sm:px-2
         md:px-6 px-8 py-2 hover:bg-gray-200 hover:text-black
       rounded-full w-[50%] flex items-center justify-center border border-black font-semibold text-white'>Buy Now</Link>
        <button onClick={addToCartFn} className='hover:bg-green-900 px-4 py-2 bg-gray-200 text-black
         rounded-full border w-[50%] flex items-center justify-center border-black font-semibold hover:text-white'>Add To Cart</button>
        </div>
    </div>
</div> 
  )
}

export default ProductCardDetails