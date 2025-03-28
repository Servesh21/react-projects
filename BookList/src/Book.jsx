import React from 'react'

const Book = ({src,author,title,id}) => {

    const Image =()=><img src={src}  alt={title}/>
    const Title =()=><h2>{title}</h2>
    const Author =()=><h4 style={{color:"#617d98",fontSize:"0.75rem",marginTop:"0.5rem"}}>{author}</h4>
    const Number1 =()=><p>#{id}</p>
  return (
    <article className='book'>
        <Number1/>
        <Image/>
        <Title/>
        <Author/>
        
    </article>
  )
}



export default Book