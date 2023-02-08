import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeNav from '../components/navbar/HomeNav'
import Footer from '../components/navbar/Footer'
import { Outlet } from 'react-router-dom'
const UserRoutes = () => {
  return (
    <div> 
        <Navbar/>
        <HomeNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserRoutes