import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FiDribbble} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Ismail-ahmadi" target="_blank"> <FiGithub /></a>
        <a href="https://www.linkedin.com/in/ismail-ahmadi/" target="_blank"> <BsLinkedin/></a>
        <a href="https://codepen.io/ismail-ahmadi/" target="_blank"> <FaCodepen/></a>
        <a href="https://www.instagram.com/epi.esi/" target="_blank"> <BsInstagram/></a>
        <a href="mailto:ismail7ahmadi@gmail.com" target="_blank"> <SiGmail/></a>
        <a href="https://dribbble.com/Ismail-ahmadi" target="_blank"> <FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials
