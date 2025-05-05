import React from 'react'
import {nanoid} from 'nanoid'

import SingleColor from './SingleColor'
const Colorlist = ({colors}) => {
  console.log(colors)
  return (
    <section className="colors">

        {colors.map((colour,index) =>{
            return <SingleColor key={nanoid()} color={colour} index={index} />
        })}
    </section>
  )
}

export default Colorlist