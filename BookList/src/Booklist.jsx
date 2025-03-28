import React from 'react'
import Book from './Book'

const Booklist = () => {
    const books = [
    {
        src:"https://m.media-amazon.com/images/I/61mjywP1kGL._SY342_.jpg",
        author :"Perry Zurn",
        title:"Curious Minds: The Power of Connection",
        id:1
    },
    {
        src:"https://m.media-amazon.com/images/I/71Vm0TWo3GL._SL1500_.jpg",
        author :"Rujuta Diwekar ",
        title:"The Commonsense Diet",
        id:2
    },
    {
        src:"https://m.media-amazon.com/images/I/61mjywP1kGL._SY342_.jpg",
        author :"Curious Minds: The Power of Connection",
        title:"Perry Zurn",
        id:3
    }
]

  return (
    <section className='booklist'>
        {books.map((b)=>(
            <Book src={b.src} author={b.author} title={b.title}  key={b.id} id={b.id}/>
        ))}

    </section>
  )
}

export default Booklist