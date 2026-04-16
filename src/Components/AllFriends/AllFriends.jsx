import React, { use } from 'react'
import { Link } from 'react-router'



const AllFriends = ({ friends }) => {
    

    const statusColors = (status) => {
        if(status === "on-track")
            return "bg-green-800"
        else if(status === "almost due")
            return "bg-yellow-500"
        else
            return "bg-red-600"
    }
    return (
        <div className='bg-gray-100'>
            <div className="max-w-11/12 sm:max-w-10/12 mx-auto  py-10 px-5 border-t border-gray-300">
                <h2 className='text-2xl font-bold mb-3'>My Friends</h2>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {friends.map(friend => (
                        <Link to={`/friendsDetails/${friend.id}`} key={friend.id} className="bg-white shadow-gray-400 p-4 rounded-md items-center text-center">
                            <div className="flex justify-center mb-3">
                                <img className='rounded-full' src={friend.picture} alt={friend.name} />
                            </div>
                        <div className="space-y-2">
                            <h3>{friend.name}</h3>
                        <p className='text-gray-500'>{friend.days_since_contact} day ago</p>
                        <p className='text-black bg-green-300 rounded-4xl w-20 m-auto p-1'>{friend.tags[0]}</p>
                        <p className={`${statusColors(friend.status)} text-white rounded-4xl w-25 m-auto mt-2 p-1`}>{friend.status}</p>
                        </div>
                    </Link>))}
                    
                </div>
            </div>
        </div>
    )
}

export default AllFriends
