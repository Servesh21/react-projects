import React from 'react'
import { useState } from 'react'

const Form = ({addColor}) => {
    const [color,setcolor]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        addColor(color)
    }
  return (
    <section className='container'>
        <h4>
            Color Generator
        </h4>
        <form className=' color-form ' onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={(e)=>setcolor(e.target.value)} />
        <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} placeholder='#f15025' />
        <button className='btn' style={{background:color}}>Generate</button>
        </form>
    </section>

  )
}

export default Form