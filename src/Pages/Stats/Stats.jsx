import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts'
import { timeLineContext } from '../../layout/mainLayout/MainLayout';
import { Link } from 'react-router';

const Stats = () => {

  const { timeLine } = useContext(timeLineContext);
  
  const counts = timeLine.reduce(
    (acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    },
    {}
  );
  
  // console.log(counts);
  
  const data = [
      {name: "call", value: counts.call, fill: "#008000"},
      {name: "text", value: counts.text, fill: "#0000FF"},
      {name: "video", value:counts.video, fill: "#800080"},
    ];
  
    // console.log(data);
  return (
    <div>
      <div className="bg-gray-100 pb-10">
        <h1 className='text-3xl font-bold text-center  m-5 py-5'>Friendship Analytics</h1>
        <div className="w-9/10 sm:w-8/10 xl:w-7/10  m-auto shadow-2xl rounded-md bg-white p-5">
          <h4 className='text-2xl font-semibold'>By Interaction Type</h4>
          <PieChart style={
            { width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto', padding:'20px'
              
             }
          }
             responsive>
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />

            </PieChart>
            <div className='flex justify-center gap-4'>
            <Link
          to="/"
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
            <Link
          to="/timeline"
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Go Back TimeLine
        </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Stats
