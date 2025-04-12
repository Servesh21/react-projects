import React, { useEffect, useState } from 'react'
import { list,longList,shortList } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi'
const Carousel = () => {
    const [people,setpeople] = useState(longList)
    const [currentPerson,setCurrentPerson] = useState(0)
    const prevslide = () => {
        const result = (oldperson-1+people.length)%people.length
        return result
    }
    const nextslide = () => {
        setCurrentPerson((oldperson)=>{
            const result = (oldperson+1)%people.length
            return result
        })
    }
    useEffect(()=>{
       let sliderId= setInterval(() => {
            nextslide();
        }, 2000);
        return () =>{clearInterval(sliderId)}
    },[currentPerson])

  return (
    <section className="slider-container">
        {people.map((person,index) => { 
            const  { id, image, name, title, quote } = person

            return(
                <article key={id} className="slide" style={{transform:`translateX(${100 *( index-currentPerson)}%)`, opacity:index===currentPerson ?1:0,visibility:index ===currentPerson ? 'visible':'hidden' }}>
                    <img src={image} alt={name} className="person-img" />
                    <h4 className="name">{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className='icon' />
                </article>
            )
        })}
        <button className="prev" type='button' onClick={prevslide}><FiChevronLeft/></button>
        <button className="next" type='button' onClick={nextslide}><FiChevronRight/></button>
    </section>
  )}
export default Carousel