import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
