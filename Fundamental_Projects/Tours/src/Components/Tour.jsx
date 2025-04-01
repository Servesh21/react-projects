import {React,useState} from 'react'

const Tour = ({id,image,info,name,price,removeTour}) => {
    const [readmore,setreadmore]= useState(false);
  return (
    <div className='single-tour'>
        <img src={image} alt={name} className='img'/>
        <span className='tour-price'>${price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>{readmore?info:`${info.substring(0,200)} ...`}
                <button className="info-btn" onClick={()=> setreadmore(!readmore)}>{readmore ? 'show less':"read more"}</button>
                
            </p>
            <button className="btn btn-block delete-btn" onClick={()=> removeTour(id)}>Not Interested</button>
        </div>

    </div>
  )
}

export default Tour