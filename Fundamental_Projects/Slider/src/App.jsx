import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { shortList,list,longList } from './data'
import Carousel from './Carousel'
function App() {
  const [people,setpeople] = useState(shortList)

  return (
    <main>
      <Carousel />
    </main>
  )
}

export default App
