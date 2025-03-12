import React from 'react'
import './header.css'
import CTA from './CTA'
import ME2 from '../../assets/ME2.png'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tushar Mishra</h1>
        <h5 className="text-light">Mobile and Web Developer</h5>
        <CTA/>
          <HeaderSocials/>
        <div className="me">
          <img src={ME2} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header
