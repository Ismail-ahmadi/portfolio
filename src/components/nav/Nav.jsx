import React from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react' 

function Nav() {
  const [colorNav, setColorNav] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColorNav(true)
    }else {
      setColorNav(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className="small-devices">
        <div>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <ImHome3 /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBookAlt /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceFill /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
        </div>
        
      </div>
      <div className={colorNav ? 'lg-devices lg-devices-bg' : 'lg-devices'}>
        <ul>
          <li><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active-lg' : ''}>Home</a></li>
          <li><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active-lg' : ''}>About</a></li>
          <li><a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active-lg' : ''}>Experience</a></li>
          <li><a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active-lg' : ''}>Qualification</a></li>
          <li><a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active-lg' : ''}>Portfolio</a></li>
          <li><a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active-lg' : ''}>Recommendation</a></li>
          <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active-lg' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
