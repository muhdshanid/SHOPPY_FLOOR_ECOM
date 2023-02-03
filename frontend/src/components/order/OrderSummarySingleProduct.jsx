import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplyCouponQuery } from "../../store/services/couponServices";
import { useSendPaymentMutation } from "../../store/services/paymentServices";
import { discount } from "../../utils/discount";

const OrderSummarySingleProduct = ({product,color,size,quantity}) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(quantity ? quantity : 1)
    const [coupon, setCoupon] = useState("")
    const taxRate = 10
    const total = discount(product.price,product.discount) * qty
    // const stripePrice = discount(product.price,product.discount)
    const [skip, setSkip] = useState(true)
    const taxPrice = total *  (taxRate / 100)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [doPayment, res] = useSendPaymentMutation();
    let finalPrice = parseInt(total) + parseInt(taxPrice)
    const {data,isFetching,isSuccess} = useApplyCouponQuery(coupon,{skip})
    const applyCouponFn = () => {
      if(coupon !== ""){ 
        setSkip(prev => !prev)
      }
    } 
    const pay = () => { 
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
          newProduct['size'] = size ? size : sizes[0]
        newProduct['color'] = color ? color : colors[0]
        newProduct['quantity'] = qty
        console.log(newProduct);
        const cart = []
        cart.push(newProduct)
      doPayment({cart,id:"63db73c0bfa2e9e620713d61",total:finalPrice})
    }
    useEffect(() => {
      if (res?.isSuccess) {
        window.location.href = res?.data?.url;
      }
    }, [res]);
    useEffect(()=>{
      if(isSuccess){
        let couponDiscount = data?.discount
        let amountAfterDiscount = total *  (couponDiscount / 100)
        let last = parseInt(total) + parseInt(taxPrice) - amountAfterDiscount
        setCouponDiscount(amountAfterDiscount)
      }
    },[, isSuccess])
  return (
    <div className="w-12/12  p-4 border flex flex-col gap-4">
    <div className="flex px-4 items-center justify-between ">
      <h6 className="font-bold text-2xl text-gray-900 ">Order Summary</h6>
    </div>
    <div className=" w-full flex flex-col gap-2">
      <div className="flex  p-4">
        <div>
          <input
          value={coupon}
          onChange={(e)=>setCoupon(e.target.value)}
            type="text"
            className="bg-gray-200  px-4 py-2 rounded-full outline-none border-none"
            placeholder="Enter Coupon Code"
          />
        </div>
        <div>
          <button onClick={applyCouponFn}
            className="bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-full border border-black font-semibold text-white"
          >
            Apply Coupon
          </button>
        </div>
      </div>
      <div className="flex p-4 flex-col gap-10">
       <div className="flex flex-col gap-6">
       <div>
          <h6 className="font-bold text-lg text-gray-900 ">
            Payment Details
          </h6>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
          <input
           type="radio" name="payment" value="Cash on Delivery" /> 
          <span className="text-md font-normal  text-gray-900"> Cash on Delivery</span>
          </div>
          <div className="flex gap-4 items-center">   
          <input  
           type="radio" name="payment" value="paypal" />
            <span className="text-md font-normal  text-gray-900"> Paypal</span>
          </div>
          <div className="flex gap-4 items-center">
          <input 
           type="radio" name="payment" value="stripe" />  
           <span className="text-md font-normal  text-gray-900"> Stripe</span>
          </div>
        </div>
       </div>
        <div className="flex flex-col gap-4">
          <div className="flex pb-4 flex-col gap-4 border-b border-gray-200">
              <div className="flex items-center justify-between ">
                  <h6 className="font-semibold text-lg text-gray-900">Sub Total</h6>
                  <h6 className="font-semibold text-lg text-gray-900">₹{total}</h6>
              </div>
              <div className="flex items-center justify-between ">
                  <h6 className="font-semibold text-lg text-gray-900">Tax(10%)</h6>
                  <h6 className="font-semibold text-lg text-gray-900">₹{taxPrice}</h6>
              </div>
              <div className="flex items-center justify-between ">
                  <h6 className="font-semibold text-lg text-gray-900">Coupon Discount </h6>
                  <h6 className="font-semibold text-lg text-gray-900">-₹{couponDiscount}</h6>
              </div>
              <div className="flex items-center justify-between ">
                  <h6 className="font-semibold text-lg text-gray-900">Delivery Charge</h6>
                  <h6 className="font-semibold text-lg text-gray-900">₹0</h6>
              </div>
          </div>
          <div className="flex w-full flex-col gap-6">
          <div className="flex items-center justify-between ">
                  <h6 className="font-bold text-lg text-gray-900"> Total</h6>
                  <h6 className="font-bold text-lg text-gray-900">₹{
                    finalPrice }</h6>
              </div>
              <div className="w-full">
              <button onClick={pay} className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-full border w-full border-black font-semibold text-white'>Pay ₹{
             finalPrice 
         }</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderSummarySingleProduct