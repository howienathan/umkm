import React from 'react'
import Achievment from './components/Achievment'
import App from "./App"
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import AllGod from './components/AllGod'
import Poseidon from './components/Poseidon'
import Zeus from './components/Zeus'
import Apollo from './components/Apollo'
import Ares from './components/Ares'
import Hermes from './components/Hermes'
import Hercules from './components/Hercules'
import Login from './components/login'
import SignUpPage from './components/SignUpPage'
import ProductCarousel from './components/ProductCarousel'
import Sejarah from './components/Sejarah'


const router = createBrowserRouter([
    {
        path: "/",
        children: [

            {
                index: true,
                element: <App/>,
            },
            
            {
                path: "/Login",
                element: <Login/>,
            },
            {
                path: "/SignUp",
                element: <SignUpPage/>,
            },
            {
                path: "/Menu",
                element: <ProductCarousel/>,
            },
            {
                path: "/Sejarah",
                element: <Sejarah/>,
            },
        ]
    }
])

const Route = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Route