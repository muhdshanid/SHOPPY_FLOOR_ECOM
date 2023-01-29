import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import OrderDetails from "../../components/order/OrderDetails";

const Checkout = () => {
  return (
    <div>
      <BreadCrumbs title={"Checkout"} />
      <div
        className="w-12/12 lg: flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100">
      <OrderDetails/>
      </div>
    </div>
  );
};

export default Checkout;
