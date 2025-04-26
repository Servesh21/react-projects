import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
function App() {
  const [count, setCount] = useState(1)
  const [text,settext]=useState([]);
  const handleSubmit =(e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    settext(data.slice(0,amount))

  }
  return (
    <section className='section-center'>
      <h4>Tired of Boring lorem ipsum</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name='amount'id="amount" min='1' step='1' max='8' value={count} onChange={(e)=>setCount(e.target.value)} />
        <button className='btn'>Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((p,index)=>{
          return <p key={index}>{p}</p>
        })}
      </article>
    </section>
  )
}

export default App
