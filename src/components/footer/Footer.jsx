import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FiDribbble} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'> Ismail Ahmadi</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Qualification</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Recommendations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Ismail-ahmadi" target="_blank"> <FiGithub /></a>
        <a href="https://www.linkedin.com/in/ismail-ahmadi/" target="_blank"> <BsLinkedin/></a>
        <a href="https://codepen.io/ismail-ahmadi/" target="_blank"> <FaCodepen/></a>
        <a href="https://www.instagram.com/epi.esi/" target="_blank"> <BsInstagram/></a>
        <a href="https://dribbble.com/Ismail-ahmadi" target="_blank"> <FiDribbble /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved. Desgined and developed by <a href='#'>Ismail</a> </small>
      </div>
    </footer>
  )
}

export default Footer
