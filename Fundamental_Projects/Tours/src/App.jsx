import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import Loading from './Components/Loading'
import Tours from './Components/Tours'

const url ='https://www.course-api.com/react-tours-project'
function App() {
  const [isloading, setisloading] = useState(true)
  const [tours, settours] = useState([])
  const removeTour = (id) =>{
    const newtours = tours.filter((tour)=> tour.id !== id);
    settours(newtours);
  }

  const fetchtours = async () =>{
    setisloading(true);
    try{
    const res = await fetch(url);
    const tours = await res.json() 
    console.log(tours)
    settours(tours)
    }catch(err){
    console.log(err);
    }
    setisloading(false)
  }

  useEffect(()=>{

    fetchtours();
  },[])

if(isloading){
  return <main>
    <Loading />
  </main>
}
if(tours.length === 0){
  return(
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button onClick={fetchtours} className='btn-info'>Refresh</button>
      </div>
    
    </main>
  )
}
  return (
    <>
     
      <Tours tours = {tours} removeTour={removeTour}/>
    </>
  )
}


export default App
