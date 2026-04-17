import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const Bannar = ({ friends }) => {
    return (
        <div>
            <div className="bg-gray-100 pt-12 ">
                <div className="text-center space-y-3 P-10 mb-10">
                    <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
                    <p className=''>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <button className='btn bg-green-600 text-white rounded-md'><IoMdAdd />Add a Friend</button>
                </div>
                <div className="w-11/12 sm:w-10/12 m-auto grid grid-cols-2 sm:grid-cols-4 gap-4 p-5">
                    <div className="bg-white shadow-gray-400 p-4 rounded-md h-30 text-center">
                        <p className='text-2xl font-bold '>{friends.length}</p>
                        <p>Total Friends</p>
                    </div>
                    <div className="bg-white shadow-gray-400 p-4 rounded-md h-30 text-center">
                        <p className='text-2xl font-bold '>3</p>
                        <p>On Track</p>
                    </div>
                    <div className="bg-white shadow-gray-400 p-4 rounded-md h-30 text-center">
                        <p className='text-2xl font-bold '>6</p>
                        <p>Need Attention</p>
                    </div>
                    <div className="bg-white shadow-gray-400 p-4 rounded-md h-30 text-center ">
                        
                            <p className='text-2xl font-bold '>12</p>
                        <p>Interactions This Month</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannar
