import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarRating = ({rating}) => {
  return (
    
   rating == 0 ?
    <>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    </>
    : rating == 1 ? 
    <>
    <AiFillStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    </>
    : rating == 2 ? 
    <>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    </>
    : rating == 3 ? 
    <>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    </>
    : rating == 4 ? 
    <>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiOutlineStar size={20} color='green'/>
    </>
    : rating == 5 ? 
    <>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    <AiFillStar size={20} color='green'/>
    </>
    : ""
  )
}

export default StarRating