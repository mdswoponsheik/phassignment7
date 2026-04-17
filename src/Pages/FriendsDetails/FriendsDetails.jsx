import React, { use, useContext } from 'react'
import { HiH2 } from 'react-icons/hi2';
import { RiArchiveLine, RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { TbMessage, TbPhoneCall, TbVideo } from 'react-icons/tb';
import { Link, useLoaderData, useParams } from 'react-router'
import { timeLineContext } from '../../layout/mainLayout/MainLayout';
import { toast } from 'react-toastify';

const FriendsDetails = () => {

  const { id } = useParams();
  // console.log(params);
  const details = useLoaderData();
  // console.log(details);

  const expectedFriend = details.find(friend => friend.id == id);
  // console.log(expectedFriend);


  const { timeLine, setTimeLine } = useContext(timeLineContext);


  const handleEvent = (type) => {
    const event = {
      id: expectedFriend.id,
      type: type,
      date: new Date().toLocaleString(),
      name: expectedFriend.name
    }
    setTimeLine([event, ...timeLine]);
  }

  const statusColors = (status) => {
    if (status === "on-track")
      return "bg-green-800"
    else if (status === "almost due")
      return "bg-yellow-500"
    else
      return "bg-red-600"
  }

  const handleCall = () =>{
    toast.info(`Calling ${expectedFriend.name} `)
  };
  const handleText = () =>{
    toast.info(`Texting ${expectedFriend.name} `)
  };
  const handleVideo = () =>{
    toast.info(`Video calling ${expectedFriend.name}`)
  };
  

  return (
    <div className='bg-gray-100'>
      <div className="">
        <h1 className='text-3xl font-bold text-center  m-5 py-5'>Friend Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-11/12 sm:max-w-11/12 mx-auto  ">
          <div className="pb-5">
            <div className="bg-white shadow-gray-400 p-4 rounded-md items-center text-center">
              <div className="flex justify-center mb-3">
                <img className='rounded-full' src={expectedFriend.picture} alt={expectedFriend.name} />
              </div>
              <div className="space-y-3">
                <h3 className='text-2xl font-bold'>{expectedFriend.name}</h3>
                <p className={`${statusColors(expectedFriend.status)} text-white rounded-4xl w-25 m-auto mt-2 p-1`}>{expectedFriend.status}</p>
                <p className='text-black bg-green-300 rounded-4xl w-20 m-auto mt-2 p-1'>{expectedFriend.tags[0]}</p>
                
                <p className='text-gray-500'><span className='text-2xl font-bold'>Bio: </span>{expectedFriend.bio} day ago</p>
                <p className='text-gray-500'><span className='text-2xl font-bold'>Email: </span>{expectedFriend.email} day ago</p>
              </div>
            </div>
            <div className="my-3 space-y-3">
              <button className="bg-white btn text-gray-500 w-full font-semibold  text-center shadow-2xl rounded-sm p-3 flex justify-center items-center gap-1.5 "><RiNotificationSnoozeLine /> Snooze 2 weeks </button>
              <button className="bg-white btn text-gray-500 w-full font-semibold text-center shadow-2xl rounded-sm p-3 flex justify-center items-center gap-1.5 "><RiArchiveLine />Archive</button>

              <button className="bg-white btn text-error w-full font-semibold text-center shadow-2xl rounded-sm p-3 flex justify-center items-center gap-1.5"> <RiDeleteBin6Line /> Delete </button>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between gap-3">
              <div className="bg-white shadow-gray-400 p-4 rounded-md h-35 sm:h-30 text-center w-1/3">
                <p className='text-xl sm:text-2xl font-bold '>{expectedFriend.days_since_contact}</p>
                <p>Days since contact</p>
              </div>
              <div className="bg-white shadow-gray-400 p-4 rounded-md h-35 sm:h-30 text-center w-1/3">
                <p className=' text-xl sm:text-2xl font-bold '>{expectedFriend.goal}</p>
                <p>Goals(Days)</p>
              </div>
              <div className="bg-white shadow-gray-400 p-4 rounded-md h-35 sm:h-30 text-center w-1/3">
                <p className='text-xl sm:text-2xl font-bold '>{expectedFriend.next_due_date}</p>
                <p>Next Due Date</p>
              </div>
            </div>
            <div className="bg-white shadow-gray-400 p-7 rounded-md mt-5">
              <h2 className='text-xl font-bold'>Relationship Goal</h2>
              <div className=" flex justify-end">
                <button className='btn text-blue-500 hover:text-blue-700'>Edit</button>
              </div>
              <p>Connect every <span className='font-bold'>{expectedFriend.goal} days</span></p>
            </div>
            <div className="bg-white shadow-gray-400 p-7 rounded-md mt-5">
              <h4 className='text-xl mb-4'>Quick Check-In</h4>
              <div className="flex gap-3 justify-between ">
                <button onClick={() => {handleEvent("call"); handleCall();}} className='btn text-blue-500 hover:text-blue-700 w-1/3 h-20'><TbPhoneCall className='text-4xl' />Call</button>
                <button onClick={() => {handleEvent("text"); handleText();}} className='btn text-blue-500 hover:text-blue-700 w-1/3 h-20'><TbMessage className='text-4xl' />Text</button>
                <button onClick={() => {handleEvent("video"); handleVideo();}} className='btn text-blue-500 hover:text-blue-700 w-1/3 h-20'><TbVideo className='text-4xl' /> Video</button>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/"
                  className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default FriendsDetails
