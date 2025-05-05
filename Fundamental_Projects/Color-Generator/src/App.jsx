import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Colorlist from './Colorlist'
import Values from 'values.js'
import {ToastContainer,toast} from 'react-toastify'
function App() {
  const [colors, setcolors] = useState(new Values('#f15025').all(10))
  const addColor =(color)=>{
    try{
      const newcolors = new Values(color).all(10)
      setcolors(newcolors)
    }catch (error){
      toast.error(error.message)
    }
  } 
  return (
    <main>
      <Form addColor={addColor} />
      <Colorlist colors={colors} />
      <ToastContainer postition='top-center' />
    </main>
  )
}

export default App
