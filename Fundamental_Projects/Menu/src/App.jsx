import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
function App() {
  const [menuItems, setmenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setmenuItems(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setmenuItems(newItems)
  }
  return (
    <section className='menu'>
      <Title text="our menu"/>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems}/>
    </section>
    
  )
}

export default App
