import React from 'react'
import Person from './Person'
const BirthdayList = ({birthday}) => {

  return (
    <div>
    <ul >
        {birthday.map((person)=>{
           return <Person key={person.id} person= {person}/>
            
        })}
    </ul>
    
    </div>
  )
}

export default BirthdayList