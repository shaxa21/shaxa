import React from 'react';
import featureimage from '../images/Frame19.png';

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='featureimage'/>
        </div>
        <div className='features-text'>
            <h2>Qisimlar</h2>
            <h3>bu reactjs<span>judayam</span>zo'r</h3>
            <p>ugswefojhvgdjhffhjgajshdgfajshgdfajdfgad</p>
            <button>dhfjgsafjjgf</button>
        </div>
    </div>
  )
}

export default Features;