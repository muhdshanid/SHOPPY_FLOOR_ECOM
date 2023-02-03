import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import DeliveryInfo from "../../components/order/DeliveryInfo";
import OrderDetails from "../../components/order/OrderDetails";
import OrderSummarySingleProduct from "../../components/order/OrderSummarySingleProduct";
import { useGetProductQuery } from "../../store/services/productServices";
import { discount } from "../../utils/discount";
import queryString from 'query-string'
const CheckoutSingleProduct = () => {
  const location = useLocation()
  console.log(location);
  const value=queryString.parse(location.search);
const color=  "#" + value.color
const size =value.size;
const quantity = value.qty

    const  {id} = useParams()
  const [product, setProduct] = useState({})
  const {data,isFetching,isSuccess,isLoading} = useGetProductQuery(id)
  useEffect(() => {
    if (isFetching === false) {
      setProduct(data);
    }
  }, [data, isFetching]);
  const total = discount(product.price,product.discount)
  return (
    isFetching === false && isSuccess && !isLoading && data && product !== {} &&   <div>
    <BreadCrumbs title={"Checkout"} />
    <div
      className="w-12/12  flex  px-4
   lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100">
    <div className="flex w-7/12 flex-col mr-8">
    <OrderDetails color={color} quantity={quantity} size={size} product={product}/>
    <DeliveryInfo/>
    </div>
    <div className=" w-5/12">
      <OrderSummarySingleProduct color={color} quantity={quantity} size={size} total={total}  product={product}/>
    </div>
    </div>
  </div>
  )
}

export default CheckoutSingleProduct