import React from 'react';
import Box from './Box';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';

function Services() {
  return (
    <div id='services'>
      <div className='s-heading'>
        <h1>Xizmatlar</h1>
        <p>Buyerda bazibir narsalar bor</p>
      </div>
      <div className='b-container'>
        <Box image={s1} alte='image1' button='js'/>
        <Box image={s2} alte='image2' button='python'/>
      </div>
    </div>
  )
}

export default Services;