import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import Home from './Pages/home/Home'
import Navbar from './Components/navbar/Navbar'
import MainLayout from './layout/mainLayout/MainLayout'
import TimeLine from './Pages/TimeLine/TimeLine'
import Stats from './Pages/Stats/Stats'
import FriendsDetails from './Pages/FriendsDetails/FriendsDetails'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/',
        element: <Home />
       },
       {
        path:'/friendsDetails/:id',
        element: <FriendsDetails />,
        // loader: ({params}) => fetch(`/public/friends.json/${params.id}`),
        loader: () => fetch("/public/friends.json")
       },
       {
        path:'/timeline',
        element: <TimeLine />
       },
       {
        path:'/stats',
        element: <Stats />
       }
    ]
  },
  {
    path: '/about',
    element: <h1>About</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    

  </StrictMode>,
)
