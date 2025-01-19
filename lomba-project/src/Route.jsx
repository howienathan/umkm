import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/login'
import SignUpPage from './components/SignUpPage'
import ProductCarousel from './components/ProductCarousel'
import App from './App'
import Sejarah from './components/Sejarah'
import Dashboard from './components/Dashboard'


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
            {
                path: "/Dashboard",
                element: <Dashboard/>,
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