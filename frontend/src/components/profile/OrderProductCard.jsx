import React from "react";
import Stepper from "../stepper/Stepper";
import { discount } from "../../utils/discount";
const OrderProductCard = ({ order }) => {
  const price = discount(order.productId.price, order.productId.discount);
  const totalPrice = price * order.quantities;
  return (
    <div className="p-4 bg-white  rounded-lg border flex flex-col gap-4">
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4 last:items-start first:items-center">
          <div className="bg-gray-200 rounded-lg p-2">
            <img
              src={order.productId.images[0].url}
              className="object-cover
           rounded-lg w-[8rem] h-[6rem]"
              alt="product"
            />
          </div>
          <div className="flex ju justify-between h-full grow flex-col gap-6">
            <h6 className="font-semibold  capitalize text-xl text-gray-900">
              {order.productId.name}
            </h6>
            <div className="flex   items-center gap-4">
              {order.color && (
                <div className="flex gap-4">
                  <div
                    style={{ backgroundColor: order.color }}
                    className=" rounded-full w-6 h-6"
                  ></div>
                </div>
              )}
              {order.size && (
                <div className="flex items-center gap-1">
                  <div
                    className={`border-2
                                  "border-gray-900" 
                                text-md  font-semibold px-1  uppercase cursor-pointer rounded
                                text-gray-900`}
                  >
                    {order.size}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex  justify-between h-full flex-col gap-6">
            <h6h6 className="font-semibold text-xl text-gray-900">
            ₹{totalPrice}
            </h6h6>
            <p className="font-normal text-md text-gray-600">
              Quantity:
              {order.quantities}
            </p>
          </div>
        </div>
      </div>
      <Stepper order={order}/>
    </div>
  );
};

export default OrderProductCard;
