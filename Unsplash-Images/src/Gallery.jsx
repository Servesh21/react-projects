import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'
const url=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`

const Gallery = () => {
    const {searchterm} = useGlobalContext();
    
    const {isLoading,isError,data} = useQuery({
        queryKey:['images',searchterm],
        queryFn: async () =>{
            const res = await axios.get(`${url}&query=${searchterm}`)
            return res.data
        }
    })
    console.log(data)
if(isLoading){
    return (
        <section className="image-container">
            <h4>Loading...</h4>
        </section>
    )
}
if(isError){
    return (
        <section className="image-container">
            <h4>There was a error</h4>
        </section>
    )
}
const result = data.results
if(result.length<1) {
    
        return (
            <section className="image-container">
                <h4>No Results Found...</h4>
            </section>
        )
}
return (
    <section className='image-container'>
        {result.map((item) => {
            const url = item?.urls?.regular; 
            return <img src={url} alt= {item.alt_description} key={item.id} className='img'></img>
        })}
    </section>
)
}

export default Gallery