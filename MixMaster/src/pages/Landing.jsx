import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CockTailList from '../Components/CockTailList'
import SearchForm from '../Components/SearchForm'
export const loader = async ({request}) =>{
  const url = new URL(request.url);

  const searchTerm=url.searchParams.get('search')|| "a";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  console.log(response)
  return {data:response.data.drinks,searchTerm}
}
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const Landing = () => {
  const {data,searchTerm} = useLoaderData();
  console.log(data)
  
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      <CockTailList drinks={data}/>
    </>
  )
}

export default Landing