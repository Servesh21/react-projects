import React from 'react'
import { useLoaderData,Link,Navigate,useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async({params}) =>{
  const {id}= params;
  console.log(id)
  const {data} = await axios.get(`${url}${id}`)
  console.log(data)
  return{id,data}

}
const Cocktail = () => {
  const {id,data}=useLoaderData();
  if (!data) return <Navigate to='/'/>
  const singleDrink = data.drinks[0];
  const navigate = useNavigate();
  const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions}=singleDrink;
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  return (
     <Wrapper>
      <header>
        <button onClick={() => navigate(-1)} className='btn'>
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail