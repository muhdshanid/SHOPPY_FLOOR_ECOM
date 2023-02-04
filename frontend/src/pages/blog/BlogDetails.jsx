import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs'
import { useGetBlogQuery } from '../../store/services/blogServices'

const BlogDetails = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const {data,isFetching,isSuccess,isLoading,} = useGetBlogQuery(id)
    useEffect(() => {
        if (isFetching === false) {
          setBlog(data);
        }
      }, [data, isFetching]);
  return (
    isFetching === false && !isLoading && isSuccess && <div>
        <BreadCrumbs title={"Blog"} />
        <div className="w-12/12 py-4 flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100">
        <div className='flex flex-col gap-8'>
            <div className=''>
            <h6 className="font-semibold text-2xl text-gray-900 capitalize">
            {blog?.name}
          </h6>
            </div>
            <div className='flex flex-col gap-2'>
                <img className='w-full rounded-lg h-[50vh]' src={blog?.image} alt="blog" />
                <div className='flex items-center justify-between'>
            <p className=" capitalize font-semibold  break-words text-sm text-gray-400">
                    {moment(blog?.createdAt).format("DD MMMM YYYY")}
                  </p>
                 <div className='flex items-center gap-2'>
                 <AiOutlineLike size={20} color="green"/>
                        <p className='font-semibold text-md text-green-900'>13</p>
                        <AiOutlineDislike size={20} color="green"/>
                        <p className='font-semibold text-md text-green-900'>13</p>
                 </div>
                </div>
            </div>          
            <div>
                <p className='font-semibold text-sm text-gray-900'>
                    {blog?.description}
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BlogDetails