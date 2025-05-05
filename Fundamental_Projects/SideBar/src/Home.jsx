import React from 'react'
import { useGlobalCOntext } from './context'
import {FaBars} from 'react-icons/fa'

const Home = () => {
    const {OpenSidebar,OpenModal}=useGlobalCOntext()
  return (
    <main>
        <button className="sidebar-toggle" onClick={OpenSidebar}>
            <FaBars/>
        </button>
        <button className="btn" onClick={OpenModal}>Show Modal</button>
    </main>
  )
}

export default Home