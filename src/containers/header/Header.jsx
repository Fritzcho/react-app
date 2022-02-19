import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="Home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's build our first react app.

          <div className='gpt3__header-content__input'>
             <input type="email" placeholder='Your email adress'>
               
             </input>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Header