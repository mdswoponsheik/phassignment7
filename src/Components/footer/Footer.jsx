import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
               <div className="text-center ">
                    <div className="justify-center items-center">
                        <img src="/src/assets/logo-xl.png" alt="" 
                        className=' w-3/5 m-auto'/>
                        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    </div>
                    <div className=" ">
                        <h4 className='text-2xl text-white font-semibold mb-3'>Social Links</h4>
                        <div className="flex gap-4">
                            <a href="" className=""><FaInstagram className='w-10 h-10' /></a>
                            <a href="" className=""><FaFacebook  className='w-10 h-10'/></a>
                            <a href="" className=""><FaXTwitter  className='w-10 h-10'/></a>
                        </div>
                    </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center border-t border-gray-950 pt-4 w-full">
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-4">
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
               </div>
            </footer>
        </div>
    )
}

export default Footer
