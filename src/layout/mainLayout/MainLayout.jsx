import React, { createContext, Suspense, useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/footer/Footer'
import { ToastContainer } from 'react-toastify';

export const timeLineContext = createContext();

const MainLayout = () => {
  const [timeLine, setTimeLine] = useState([]);

  
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h2 className='text-9xl font-bold'>loading</h2>}>
      <timeLineContext.Provider value={{ timeLine, setTimeLine }}>
        <Outlet />
        <ToastContainer />
      </timeLineContext.Provider>
       </Suspense>
      <Footer />
    </div>
  )
}

export default MainLayout
