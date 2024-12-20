import React from 'react'
import App from "./App"
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"




const router = createBrowserRouter([
    {
        path: "/",
        children: [

            {
                index: true,
                element: <App/>,
            },
            
            {
              path: "/menu",
              element: <Menu/>
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