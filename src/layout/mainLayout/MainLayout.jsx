import React, { createContext, useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/footer/Footer'

export const timeLineContext = createContext();

const MainLayout = () => {
  const [timeLine, setTimeLine] = useState([]);

  
  return (
    <div>
      <Navbar />
      <timeLineContext.Provider value={{ timeLine, setTimeLine }}>
        <Outlet />
      </timeLineContext.Provider>
      <Footer />
    </div>
  )
}

export default MainLayout
