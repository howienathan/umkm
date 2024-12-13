import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import ContactForm from '../src/components/ContactForm'

const router = createBrowserRouter([
    {
        path: "/",
        children: [

            {
                index: true,
                element: <App/>,
            },
            
            {
                path: "/Contact",
                element: <ContactForm/>,
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