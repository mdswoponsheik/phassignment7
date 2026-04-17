import React, { useContext, useState } from 'react'
import { timeLineContext } from '../../layout/mainLayout/MainLayout';
import { MdInbox } from 'react-icons/md';
import { TbMessage, TbPhoneCall, TbVideo } from 'react-icons/tb';
import { Link } from 'react-router';

const TimeLine = () => {
  const { timeLine } = useContext(timeLineContext);

  // console.log(timeLine)
  console.log(timeLineContext);

  const statesIcons = (type) => {
    if (type === "call") {
      return <TbPhoneCall className='text-green-400 ' size={30} />
    } else if (type === "text") {
      return <TbMessage className='text-blue-400 ' size={30} />
    } else
      return <TbVideo className='text-purple-400 ' size={30} />

  };



  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? timeLine
      : timeLine.filter(item => item.type === filter);

  // console.log(filteredData);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <h3 className='text-3xl font-bold text-center  m-5 py-5'>Timeline</h3>
      {timeLine.length === 0 ? <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="empty"
          className="w-40 mb-6 opacity-80"
        />

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700">
          No Data Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2 max-w-md">
          Looks like you don't have anything here yet. Start by adding something new.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Add New
        </Link>

      </div> : <div className="max-w-11/12 sm:max-w-10/12 mx-auto p-5 border-t border-gray-300">
        <div className="flex justify-between items-center mb-5">
          <select className='w-30 h-10 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md' onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
          <div className="">
            <Link
          to="/"
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
          </div>
        </div>
        {filteredData.map((event, index) => (
          <div key={event.id + '-' + index} className="flex items-center gap-3 mb-10 bg-white p-4 rounded-md shadow-gray-400">
            <div className="">
              <p >{statesIcons(event.type)}</p>
            </div>
            <div className="">

              <div className="flex gap-1">
                <p className='text-xl font-semibold'>{event.type}</p>
                <p className='flex items-center'>with</p>
                <p className='flex items-center font-semibold'>{event.name}</p>
              </div>
              <p>{event.date}</p>
            </div>
          </div>))}
      </div>}

    </div>
  )
}

export default TimeLine
