import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//import {Home} from './routes/'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Error from './routes/Error'

 const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
    children:[{
      path:'contacts/:contactid',
      element:<Contact/>
    }]
  }
  ,
  {
    path:'/about',
    element:<h1>About</h1>
  }
  ,
  {
    path:'/contact',
    element:<h1>Contact</h1>
  }
  
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>,
)
