import { useState } from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { About,HomeLayout,Landing,Error,Cocktail,NewsLetter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
            {
        path:'cocktail',
        element:<Cocktail/>
      },
      {
        path:'newsletter',
        element:<NewsLetter/>
      },
      {
        path: 'about',
        element: <About/>
      },

    ]
  },

])
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
