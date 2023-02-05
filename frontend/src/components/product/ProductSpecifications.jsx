import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "../../store/services/productServices";
import { discount } from "../../utils/discount";
const ProductSpecifications = ({ id }) => {
  const [product, setProduct] = useState({});
  const { data, isFetching, isSuccess, isLoading } = useGetProductQuery(id);
  useEffect(() => {
    if (isFetching === false && isSuccess && !isLoading) {
      setProduct(data);
    }
  }, [data, isFetching, isLoading, isSuccess]);

  return (
    <div className="w-12/12 my-8 flex flex-col gap-8">
      <div className="flex   items-center justify-between">
        <div className="flex">
          <h6 className="font-semibold text-2xl capitalize text-gray-900">
            {product.name} full specifications
          </h6>
        </div>
      </div>
      <div className="my-2 w-full md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 sm:grid-cols-1   gap-8">
        <div className="">
          <div className="bg-gray-200 flex flex-col gap-2 p-4 rounded-lg ">
            <div>
              <h6 className=" capitalize font-semibold text-lg text-gray-900">
                General
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-8 bg-white rounded-lg px-4 py-2">
                <h6 className=" uppercase font-semibold w-[30%] text-md text-gray-900">
                  Brand
                </h6>
                <h6 className=" uppercase font-semibold text-md text-gray-500">
                  {product.brand}
                </h6>
              </div>
              <div className="flex gap-8  bg-white rounded-lg px-4 py-2">
                <h6 className=" uppercase font-semibold w-[30%] text-md text-gray-900">
                  Category
                </h6>
                <h6 className=" uppercase font-semibold text-md text-gray-500">
                  {product.category}
                </h6>
              </div>
              <div className="flex gap-8 bg-white rounded-lg px-4 py-2">
                <h6 className=" font-semibold uppercase text-md w-[30%] text-gray-900">
                  Product Name
                </h6>
                <h6 className=" font-semibold uppercase text-md text-gray-500">
                  {product.name}
                </h6>
              </div>
              <div className="flex gap-8 bg-white rounded-lg px-4 py-2">
                <h6 className=" font-semibold uppercase text-md w-[30%] text-gray-900">
                  Price
                </h6>
                <h6 className=" font-semibold uppercase text-md text-gray-500">
                  {discount(product.price,product.discount)}
                </h6>
              </div>
              <div className="flex gap-8 bg-white rounded-lg px-4 py-2">
                <h6 className=" font-semibold uppercase text-md w-[30%] text-gray-900">
                  Stock
                </h6>
                <h6 className=" font-semibold uppercase text-md text-gray-500">
                  {product.stock}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-gray-200 flex flex-col gap-2 p-4 rounded-lg ">
            <div>
              <h6 className=" capitalize font-semibold text-lg text-gray-900">
                Product Details
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              {product?.specifications?.map((spec) => (
                <>
                  <div className="flex gap-8 bg-white rounded-lg px-4 py-2">
                    <h6 className=" font-semibold uppercase text-md w-[30%] text-gray-900">
                      {spec.key}
                    </h6>
                    <h6 className=" font-semibold uppercase text-md text-gray-500">
                      {spec.value}
                    </h6>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
