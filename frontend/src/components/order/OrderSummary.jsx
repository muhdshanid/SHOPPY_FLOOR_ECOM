import React from "react";

const OrderSummary = () => {
  return (
    <div className="w-12/12  p-4 border flex flex-col gap-4">
      <div className="flex px-4 items-center justify-between ">
        <h6 className="font-bold text-2xl text-gray-900 ">Order Summary</h6>
      </div>
      <div className=" w-full flex flex-col gap-2">
        <div className="flex  p-4">
          <div>
            <input
              type="text"
              className="bg-gray-200  px-4 py-2 rounded-full outline-none border-none"
              placeholder="Enter Coupon Code"
            />
          </div>
          <div>
            <button
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
                    <h6 className="font-semibold text-lg text-gray-900">$999.99</h6>
                </div>
                <div className="flex items-center justify-between ">
                    <h6 className="font-semibold text-lg text-gray-900">Tax(10%)</h6>
                    <h6 className="font-semibold text-lg text-gray-900">$99.99</h6>
                </div>
                <div className="flex items-center justify-between ">
                    <h6 className="font-semibold text-lg text-gray-900">Coupon Discount </h6>
                    <h6 className="font-semibold text-lg text-gray-900">-$29.99</h6>
                </div>
                <div className="flex items-center justify-between ">
                    <h6 className="font-semibold text-lg text-gray-900">Delivery Charge</h6>
                    <h6 className="font-semibold text-lg text-gray-900">-$0.00</h6>
                </div>
            </div>
            <div className="flex w-full flex-col gap-6">
            <div className="flex items-center justify-between ">
                    <h6 className="font-bold text-lg text-gray-900"> Total</h6>
                    <h6 className="font-bold text-lg text-gray-900">$1099.99</h6>
                </div>
                <div className="w-full">
                <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border w-full border-black font-semibold text-white'>Pay $1099.10</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
