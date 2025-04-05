import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
import people from "./data"

function App() {
  const [index,setIndex]=useState(0)
  people[index]
  const {name,job,image,text}=people[index]
  const nextperson =() => {    setIndex((currentIndex)=>{
    const newIndex = currentIndex + 1;
    if(newIndex>people.length-1){
      return 0
    }
    return newIndex
  })}
  const prevperson = () =>{
    setIndex((currentIndex)=>{
      
      const newIndex = currentIndex -1;
      if(newIndex<0){
        return people.length-1;
      }
      return newIndex
    })
  }
  const randomperson = ()=>{
    const random = Math.floor(Math.random()*people.length)
    setIndex(random);
  }
  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img' />
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
        <button className="prev-btn" onClick={prevperson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextperson}>
          <FaChevronRight/>
        </button>
        </div>
        <button className="btn btn-hipster" onClick={randomperson}>
          Suprise Me
        </button>
      </article>
      
    </main>
  )
}

export default App
