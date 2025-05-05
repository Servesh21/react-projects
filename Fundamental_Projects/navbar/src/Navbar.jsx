import React, { useRef, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {links,social} from './data'
import logo from './logo.svg'
const Navbar = () => {
    const [showlinks,setshowlinks]=useState(false)
    const linksContainerRef = useRef(null)
    const linksRef=useRef(null)
    const togglelink = () =>{
        console.log(linksRef.current.getBoundingClientRect())
        console.log(linksContainerRef.current.getBoundingClientRect())
        setshowlinks(!showlinks)
    }
    const linkStyles= {
        height:showlinks?`${linksRef.current.getBoundingClientRect().height}px`:'0px'
    }
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="logo" className='logo' />
                <button className="nav-toggle" onClick={togglelink}>
                    <FaBars/>
                </button>
            </div>

                       
             <div className='links-container' ref={linksContainerRef} style={linkStyles}>
                <ul className="links" ref={linksRef}>
                    {links.map((link)=>{
                        const {id,url,text}=link;
                        return <li key={id}> <a href={url} >{text}</a></li>
                    })}
                </ul>
            </div>
        <ul className="social-icons">
            {social.map((socialIcon)=>{
                const {id,url,icon}=socialIcon
                return <li key={id}><a href={url}>{icon}</a></li>
            })}
        </ul>
        </div>
    </nav>
  )
}

export default Navbar