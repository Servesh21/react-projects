import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import BirthdayList from './BirthdayList'

function App() {
  const [birthday, setBirthday] = useState(data);
  const clearall = () => {
    setBirthday([]);
  }
  return (

    <div className='container'>
      <h1>Todays birthday:{birthday.length}</h1>
      <BirthdayList birthday={birthday} setBirthday={setBirthday} />
      <button  onClick={clearall} style={{backgroundColor:"violet",padding:"5px",color:"white",fontSize:"25px"}}>Clear All</button>
    </div>
  )
}

export default App
