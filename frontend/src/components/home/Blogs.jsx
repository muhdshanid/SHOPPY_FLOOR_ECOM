import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../store/services/blogServices";
import BlogSkeleton from "../loading/BlogSkeleton";
import moment from 'moment'
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { data, isFetching } = useGetBlogsQuery();
  useEffect(() => {
    if (isFetching === false) {
      setBlogs(data);
    }
  }, [data, isFetching]);
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex  items-center justify-between">
        <div className="flex">
          <h6 className="font-semibold text-2xl text-gray-900 capitalize">
            our latest blogs
          </h6>
        </div>
        <div>
          <Link
          to={"/"}
            className="
            transition ease-in-out delay-150
             hover:-translate-y-1 hover:scale-110 
             duration-500 
            bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white"
          >
            See All
          </Link>
        </div>
      </div>
      <div className='my-2 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
     {
        isFetching ? 
        <>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        </>
        : blogs.length > 0 ?  blogs.map(blog => {
          let content = blog?.description?.slice(0,100).concat("...")
         return (
            <div className="flex flex-col my-4 gap-2 relative">
            <div className=" w-full  bg-white rounded-lg ">
              <img
                src={blog?.image}
                className="bg-gray-200
             transition ease-in-out delay-150
             hover:-translate-y-1 hover:scale-110
             duration-500
             object-cover h-[10rem] w-full rounded-lg"
                alt="product"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2  justify-between">
                  <h6 className="font-bold text-lg text-gray-900">
                   {blog?.name}
                  </h6>
               <div className="flex items-center justify-between">
               <p className=" capitalize font-semibold  break-words text-sm text-gray-400">
                    {moment(blog?.createdAt).format("DD MMMM YYYY")}
                  </p>
                  <div>
                    
                  </div>
               </div>
                </div>
                <div className="flex ">
                  <p className=" font-semibold  break-words text-sm text-gray-400">
                   {content}
                  </p>
              
       </div>
                <Link to={`/blog-details/${blog?._id}`} className='bg-green-900
                 w-[38%] sm:w-[48%] md:w-[65%] lg:w-[55%] px-8 py-2 hover:bg-gray-200 hover:text-black
       rounded-full border border-black font-semibold text-white'>Read More</Link>
                
              </div>
            </div>
          </div>
        )
        }) : ""
     }
      </div>
    </div>
  );
};

export default Blogs;
