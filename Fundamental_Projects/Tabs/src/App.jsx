import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Jobs from './Jobs'
import ButtonContainer from './ButtonContainer'
function App() {
  const [isloading, setisloading] = useState(true)
  const [jobs, setjobs] = useState([])
  const [currentIndex, setcurrentIndex] = useState(0)
  useEffect(()=>{
    async function fetchTabs() {
      const response = await fetch('https://www.course-api.com/react-tabs-project')
      const data = await response.json()
      setjobs(data)
      setisloading(false)
    }
    fetchTabs()
  },[])
  if (isloading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <>
      <ButtonContainer jobs={jobs} currentIndex = {currentIndex} setcurrentIndex={setcurrentIndex}/>
      <Jobs jobs={jobs} currentIndex={currentIndex}/>
    </>
  )
}

export default App
