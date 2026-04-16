import React, { useEffect, useState } from 'react'
import Bannar from '../../Components/bannar/Bannar'
import AllFriends from '../../Components/AllFriends/AllFriends'



const Home = ({ timeLine }) => {



  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/public/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
       }, [])


  return (
    <div>
      <Bannar friends={friends} />
      <AllFriends friends={friends} timeLine={timeLine} />
    </div>
  )
}

export default Home
