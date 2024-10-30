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


const router = createBrowserRouter([
    {
        path: "/",
        children: [

            {
                index: true,
                element: <App/>,
            },
            
            {
                path: "/GodList",
                element: <AllGod/>,
            },
            {
                path: "/Poseidon",
                element: <Poseidon/>,
            },
            {
                path: "/Zeus",
                element: <Zeus/>,
            },
            {
                path: "/Apollo",
                element: <Apollo/>,
            },
            {
                path: "/Ares",
                element: <Ares/>,
            },
            {
                path: "/Hermes",
                element: <Hermes/>,
            },
            {
                path: "/Hercules",
                element: <Hercules/>,
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