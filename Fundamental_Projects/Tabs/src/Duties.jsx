import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
//import {uuid} from 'uuidv4'
 import { v4 as uuidv4 } from 'uuid'; // Import the uuid function 
const Duties = ({duties}) => {
  return (
    <div>
        {duties.map((duty,index) => {
            return (
                <div key={uuidv4()} className='job-desc'>
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                </div>
            )
        })}
    </div>
)}

export default Duties