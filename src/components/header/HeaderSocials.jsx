import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FiDribbble} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://github.com" target="_blank"> <FiGithub /></a>
        <a href="https://linkedin.com" target="_blank"> <BsLinkedin/></a>
        <a href="https://codepen.com" target="_blank"> <FaCodepen/></a>
        <a href="https://instagram.com" target="_blank"> <BsInstagram/></a>
        <a href="https://twitter.com" target="_blank"> <BsTwitter/></a>
        <a href="https://dribbble.com" target="_blank"> <FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials
