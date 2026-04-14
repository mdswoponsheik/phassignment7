import React from 'react'
import { FaHome } from 'react-icons/fa'
import { ImStatsDots } from 'react-icons/im'
import { RiTimeLine } from 'react-icons/ri'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <img src="/src/assets/logo.png" alt="Logo" className="ml-0 sm:ml-10 " />
                </div>
                <div className="flex items-center gap-3 mr-1 sm:mr-10">
                    
                        <NavLink to='/' className={({ isActive }) => isActive ? 'flex items-center gap-1 sm:gap-2 bg-green-500 text-white rounded-4xl p-2' : 'flex items-center gap-1 sm:gap-2 text-green-500 font-bold'}><FaHome />Home</NavLink>
                        <NavLink to='/timeline' className={({ isActive }) => isActive ? 'flex items-center gap-1 sm:gap-2 bg-green-500 text-white rounded-4xl p-2'  : 'flex items-center gap-1 sm:gap-2 text-green-500 font-bold'}><RiTimeLine />Timeline</NavLink>
                        <NavLink to='/stats' className={({ isActive }) => isActive ? 'flex items-center gap-1 sm:gap-2 bg-green-500 text-white rounded-4xl p-2' : 'flex items-center gap-1 sm:gap-2 text-green-500 font-bold'}><ImStatsDots /> Stats </NavLink>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
