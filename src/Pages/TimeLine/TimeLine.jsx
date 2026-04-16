import React, { useContext, useState } from 'react'
import { timeLineContext } from '../../layout/mainLayout/MainLayout';
import { MdInbox } from 'react-icons/md';
import { TbMessage, TbPhoneCall, TbVideo } from 'react-icons/tb';

const TimeLine = () => {
  const { timeLine } = useContext(timeLineContext);

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

    console.log(filteredData);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <h3 className='text-3xl font-bold text-center  m-5 py-5'>Timeline</h3>
      {timeLine.length === 0 ? <div className="flex flex-col items-center justify-center text-6xl font-bold text-center p-10">

        <MdInbox size={70} />
        <h2 className=''> TimeLine is Empty</h2>
      </div> : <div className="max-w-11/12 sm:max-w-10/12 mx-auto p-5 border-t border-gray-300">
        <div className="mb-5">
          <select className='w-30 h-10 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md' onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
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
