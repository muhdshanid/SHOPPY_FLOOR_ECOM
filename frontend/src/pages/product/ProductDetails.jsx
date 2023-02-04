import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import ProductCard from "../../components/home/ProductCard";
import ProductOverView from "../../components/product/ProductOverView";
import ProductSpecifications from "../../components/product/ProductSpecifications";
import Reviews from "../../components/product/Reviews";
import { useGetProductQuery } from "../../store/services/productServices";

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const {data,isFetching} = useGetProductQuery(id)
  useEffect(() => {
    if (isFetching === false) {
      setProduct(data);
    }
  }, [data, isFetching]);
  return (
   isFetching === false && <div>
      <BreadCrumbs title={product?.name} />
      <div className="w-12/12 py-4 flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100">
        <ProductOverView id={id}/>
        <ProductSpecifications id={id}/>
        <Reviews product={product}/>
        <ProductCard  caption={"Products You May Like"}/>
      </div>
    </div>
  );
};

export default ProductDetails;
