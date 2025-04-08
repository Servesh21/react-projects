import React from 'react'
import Question from './Question'
const Quesions = ({questions}) => {
  return (
    <div className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
            const {id,title,info} = question
            return (<Question key={id} title={title} info={info}/>)
        })}
    </div>
  )
}

export default Quesions