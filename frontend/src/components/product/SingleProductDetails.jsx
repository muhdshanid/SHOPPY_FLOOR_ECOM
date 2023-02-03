import React, { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cartReducer'
import StarRating from './StarRating'

const SingleProductDetails = ({product,description}) => {
    const dispatch = useDispatch()
    const [selectedSize, setSelectedSize] = useState(product?.sizes[0]?.name)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.url)
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
          newProduct['size'] = selectedSize
        newProduct['color'] = selectedColor
        newProduct['quantity'] = quantity
        const cart =  localStorage.getItem("cart")
        const cartItems = cart ? JSON.parse(cart) : []
        const checkItem = cartItems.find(item => item._id === newProduct._id)
        if(!checkItem){
            console.log(newProduct);
          dispatch(addToCart(newProduct))
          cartItems.push(newProduct)
          localStorage.setItem("cart",JSON.stringify(cartItems))
          console.log("add to localstorage");
        }else{
          alert("already in cart")
          return 
        }
      }

  return (
    <div className='flex flex-col gap-2 '>
    <div className=' w-full  bg-white rounded-lg relative'>
        <img src={product.images[0].url} className="bg-gray-200 object-cover h-[20rem] w-full rounded-lg" alt="product" />
        <div className='absolute hover:bg-gray-200 cursor-pointer p-2 top-2 right-2 rounded-full bg-gray-100'>
            <AiOutlineHeart  size={20}/>
        </div>
    </div>
    <div className='flex flex-col gap-4'>
       <div className='flex flex-col'>
       <div className='flex items-center justify-between'>
            <h6 className='font-bold text-lg text-gray-900'>{product.name}</h6>
            <h6 className='font-bold text-lg text-gray-900'>₹{product.price}</h6>
        </div>
        <div>
            <p className=' font-semibold text-sm text-gray-400'>{description}</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='flex'>
                <StarRating rating={product.totalRatings}/>
            </div>
            <div>
                <p className=' font-semibold text-lg text-gray-400'>(121)</p>
            </div>
        </div>
       </div>
        <div>
        <button onClick={addToCartFn} className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
         rounded-full border border-black font-semibold text-white'>Add To Cart</button>
        </div>
    </div>
</div> 
  )
}

export default SingleProductDetails