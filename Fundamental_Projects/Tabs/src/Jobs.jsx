import React from 'react'
import Duties from './Duties'

const Jobs = ({jobs,currentIndex}) => {
    const {id, title, company, dates, duties} = jobs[currentIndex]
  return (
    <div className='container'>
                <div key={id} className='job-info'>
                    <h3>{title}</h3>
                    <span className='job-company'>{company}</span>
                    <p className='job-date'>{dates}</p>
                    <Duties duties={duties}/>
                </div>
            
        
    </div>
  )
}

export default Jobs