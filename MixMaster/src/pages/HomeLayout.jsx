import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoaging = navigation.state ==='loading'

  return (
    <>
    <Navbar/>
    <section className='page'>
      {isPageLoaging?<div className="loading"></div>:<Outlet/>}
    </section>
    
    
    </>
  )
}

export default HomeLayout