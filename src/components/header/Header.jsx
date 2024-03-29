import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
// import gsap from "gsap";


function Header() { 
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ismail Ahmadi</h1>
        <h2 className="text-light">Web & Software Developer</h2>
        <CTA />
        < HeaderSocials />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <div className="scroll__down">
           <a href="#contact" > Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header
