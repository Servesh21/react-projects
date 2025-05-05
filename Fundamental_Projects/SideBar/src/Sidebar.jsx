import React from 'react'
import { useGlobalCOntext } from './context'
import {FaTimes} from 'react-icons/fa'
import logo from './logo.svg'
import { social,links } from './data'
const Sidebar = () => {
    const {isSidebarOpen,CloseSidebar} = useGlobalCOntext()
  return (
    <aside className={isSidebarOpen?"sidebar show-sidebar":'sidebar'}>
        <div className="sidebar-header">
            <img src={logo} alt='coding addict' className='logo' />
            <button className="close-btn" onClick={CloseSidebar}><FaTimes/></button>
        </div>
        <div className="links">
            {links.map((link)=>{
                const {id,url,icon,text} = link
                return(
                    <li key={id}>
                        <a href={url}>{icon} {text}</a>
                    </li>
                )
            })}
        </div>

    </aside>
  )
}

export default Sidebar