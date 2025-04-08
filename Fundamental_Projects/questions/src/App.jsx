import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Quesions from './Quesions'

function App() {
  const [question, setQuestion] = useState(data)
  return (
    
    <>
      <Quesions questions={question}/>
    </>
  )
}

export default App
