import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const Question = ({title,info}) => {
    const [showInfo, setShowInfo] = React.useState(false)
  return (
    <div className='question'>
        <header>
            <h4>{title}</h4>
            <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
          </header>
       { showInfo && <p>{info}</p>}
    </div>
  )
}

export default Question