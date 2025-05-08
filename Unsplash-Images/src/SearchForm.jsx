import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
    const {setsearchterm}= useGlobalContext()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if(!searchValue) return;
        setsearchterm(searchValue)
    }
  return (
    <section>
        <h1 className="title">UnSplash Images</h1>
        <form  className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="form-input search-input" placeholder='cat' name='search' />
            <button className="btn">Search</button>
        </form>
    </section>
  )
}

export default SearchForm