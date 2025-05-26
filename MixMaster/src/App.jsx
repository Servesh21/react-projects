import { useState } from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { About,HomeLayout,Landing,Error,Cocktail,NewsLetter, SinglePageError } from './pages'
import {loader as LandingLoader} from './pages/Landing'
import {loader as singleCocktailLoader} from './pages/Cocktail'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children:[
      {
        loader:LandingLoader,
        index:true,
        errorElement:<SinglePageError/>,
        element:<Landing/>
      },
      {
        path:'cocktail/:id',
        errorElement:<SinglePageError/>,
        loader:singleCocktailLoader,
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
