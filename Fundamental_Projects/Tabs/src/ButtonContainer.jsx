import React from 'react'

const ButtonContainer = ({jobs,currentIndex,setcurrentIndex}) => {
  return (
    <div className='btn-container'>
        {
            jobs.map((job, index) => {
                return (
                    <button type='button' className={index===currentIndex ? 'job-btn active-btn' : 'job-btn'} key={index} onClick={() => setcurrentIndex(index)}>
                        {job.company}
                    </button>
                )
            })}
        
    </div>
  )
}

export default ButtonContainer