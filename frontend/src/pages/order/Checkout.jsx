import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import DeliveryInfo from "../../components/order/DeliveryInfo";
import OrderDetails from "../../components/order/OrderDetails";
import OrderSummary from "../../components/order/OrderSummary";
import { useGetProductQuery } from "../../store/services/productServices";

const Checkout = () => {
  const { cart, total } = useSelector((state) => state.cartReducer);
  
  return (
    <div>
      <BreadCrumbs title={"Checkout"} />
      <div
        className="w-12/12  flex  px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100">
      <div className="flex w-7/12 flex-col mr-8">
      <OrderDetails cart={cart}/>
      <DeliveryInfo/>
      </div>
      <div className=" w-5/12">
        <OrderSummary total={total} cart={cart}/>
      </div>
      </div>
    </div>
  );
};

export default Checkout;
