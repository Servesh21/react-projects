import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
        {
            items.map((item) => {
                const {id,title,category,price,img,desc} = item
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='img'/>
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <span span className='item-price'>${price}</span>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Menu