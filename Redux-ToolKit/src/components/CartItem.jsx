import React, { useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { removeItem,increase,decrease } from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  //console.log(id,img,title,price,amount)
 useEffect(()=>{
  if(amount ==0){
    dispatch(removeItem(id));
  }
 },[amount])
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={()=>{
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn'
          onClick={()=> dispatch(increase(id))}
        >
          <FaChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        
        <button
          className='amount-btn'
         onClick={()=> dispatch(decrease(id))}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;