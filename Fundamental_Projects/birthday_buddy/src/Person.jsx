import React from 'react'

const Person = ({person}) => {
    console.log(person)
  return (
    
        <li className='person' >
            <img src={person.image} alt="" />
            <h2>{person.name}</h2>
            <p>age:{person.age}</p>
        </li>
  )
}

export default Person