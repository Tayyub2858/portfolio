import React from 'react';
import './floating.css';

const Flaoting = ({image , text1 , text2}) => {
  return (
    <div className='floating-div'>
        <img src={image} alt="" />
        <span>
            {text1} <br /> {text2} 
        </span>
    </div>
  )
}

export default Flaoting