import React from 'react'
import {ToastContainer,toast} from 'react-toastify'
const SingleColor = ({color,index}) => {
  const {hex,weight} = color
  const savetoClipboard = async() =>{
    if(navigator.clipboard){
        try{
            await navigator.clipboard.writeText(`#${hex}`)
            toast.success('Color Copied to Clipboard')
        }catch (e){
            toast.error('Failed to copy to Clipboard')
        }
    }
  }
  return (
    <article className={index>10? 'color color-light':'color'} style={{background: `#${hex}`}} onClick={savetoClipboard}>
        <p className='percent-value'>{weight}%</p>
        <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor