import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1>Salom<span>Do'stim</span>Yaxshimisan</h1>
        <p className='details'>nima gaplar</p>
        <div className='header-btns'>
          <a href='/' className='cv-btn'>Qaley</a>
          <a href='/' className='cv-btn'>Yaxshimi</a> 
        </div>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header