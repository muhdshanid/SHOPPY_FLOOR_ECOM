import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decQuantity, incQuantity, removeItem } from "../../store/reducers/cartReducer";
import { discount } from "../../utils/discount";

const CartTable = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer);

    const { cart, total } = useSelector((state) => state.cartReducer);
    const inc = (id) => {
      dispatch(incQuantity(id));
    };
    const dec = (id) => {
      dispatch(decQuantity(id));
    };
    const remove = (id) => {
      // verify user that you are really want to delete the itme
      if (window.confirm("Are you sure you want  to delete this item?")) {
        dispatch(removeItem(id));
      }
    };
  return (
    cart?.length > 0 ?<div className="w-12/12 xl:overflow-hidden overflow-x-scroll  flex flex-col bg-gray-200 rounded-lg">
      <table className="rounded-lg">
        <thead className="w-full rounded-lg bg-green-900">
          <tr>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              image
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              name
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              color
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              size
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              price
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              quantities
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              total
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              delete
            </th>
          </tr>
        </thead>
        <tbody>
        { cart?.map(item => {
            const discountPrice = discount(item?.price,item?.discount)
            const totalPrice = discountPrice * item?.quantity
            
          return(
           <tr className="even:bg-gray-100 bg-gray-50">
           <td className="p-4  text-sm text-gray-700">
           <div className="flex items-center justify-center">
           <img
               className="w-16  h-16 object-cover rounded-lg"
               src={item?.images[0]?.url}
               alt="item"
             />
           </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
             <div className="flex items-center justify-center">
               <h6 className="font-semibold text-lg text-gray-900">{item?.name}</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
                       <div style={{backgroundColor:item?.color ? item?.color?.color : ""}} className=' rounded-full w-8 h-8'>
                       </div>
                       </div>
           </td>
            <td className="p-4 text-sm text-gray-700">
             <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg uppercase
                text-gray-900">{item?.size ? item?.size.name : ""}</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-gray-900">₹{discountPrice}</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className=' overflow-hidden flex items-center
                       justify-between rounded-full bg-gray-200'>
                          <div onClick={()=>dec(item._id)} className='py-2 px-6  cursor-pointer hover:bg-gray-300'>
                          <h6 className='text-gray-900 text-3xl'>-</h6>
                          </div>
                          <div className='py-3 px-6  cursor-pointer hover:bg-gray-300'>
                          <h6 className='text-gray-900 text-lg'>{item.quantity}</h6>
                          </div>
                          <div onClick={()=>inc(item._id)} className='py-2 px-6  cursor-pointer hover:bg-gray-300'>
                          <h6 className='text-gray-900 text-2xl'>+</h6>
                          </div>                                
                      </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-gray-900">₹{totalPrice}</h6>
             </div>
           </td>
           <td>
             <div className="flex items-center justify-center">
               <AiFillDelete className=" cursor-pointer" onClick={()=>remove(item._id)} size={20} color="red"/>
             </div>
           </td>
           </tr>
        )}) }
        </tbody>
      </table>
       <div className="w-full overflow-hidden p-4 bg-gray-200 rounded-lg">
       <div className="flex justify-end">
         <div className="flex items-center gap-4">
           <div>
           <h6 className="font-semibold text-lg text-gray-900">₹{total}</h6>
           </div>
           <div>
           <Link to={user === null ? "/login" : "/checkout"} className='bg-green-900 px-10 py-2 hover:bg-gray-200 hover:text-black
      rounded-full border border-black font-semibold text-white'>Checkout</Link>
           </div>
         </div>
       </div>
     </div>   
    </div>
    : <div className="w-full flex items-center justify-center">
      <h6 className="font-semibold text-gray-900 text-lg">CART IS EMPTY</h6>
    </div>
  );
};

export default CartTable;
