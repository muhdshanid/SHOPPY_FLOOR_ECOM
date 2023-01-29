import React from "react";

import BreadCrumbs from "../../components/BreadCrumbs";
import ProductCard from "../../components/home/ProductCard";
import ProductOverView from "../../components/product/ProductOverView";
import ProductSpecifications from "../../components/product/ProductSpecifications";
import Reviews from "../../components/product/Reviews";

const ProductDetails = () => {
  return (
    <div>
      <BreadCrumbs title={"Headphone"} />
      <div className="w-12/12 py-4 flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100">
        <ProductOverView />
        <ProductSpecifications/>
        <Reviews/>
        <ProductCard caption={"Products You May Like"}/>
      </div>
    </div>
  );
};

export default ProductDetails;
