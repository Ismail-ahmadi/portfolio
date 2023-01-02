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
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Qualification</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Recommendation</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
