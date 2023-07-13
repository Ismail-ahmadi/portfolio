import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {CgUserlane} from 'react-icons/cg'
import {RiUserSettingsLine} from 'react-icons/ri'
import {GiSkills} from 'react-icons/gi'
import {GiFullFolder} from 'react-icons/gi'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__content-icons">
            <div className="icon">
              <CgUserlane />
            </div>
            <div className="icon">
              <RiUserSettingsLine />
            </div>
            <div className="icon">
              <GiSkills />
            </div>
            <div className="icon">
              <GiFullFolder />
            </div>
            
          </div>
          <p>Hello! My name is Ismail and I enjoy creating things that live on the internet. My interest in web 
            development started back in 2010 but in 2017 I got immmersed into it by learning full stack development and assisted several environmentally friendly philanthropists in Jakarta, Indonesia — turns out "FULL STACK DEVELOPMENT IS FUN.""
            <br /><br />Fast-forward to today, I majored in Computer Science and am following my dream; everyday I am learning new technologies to equip myself as a full stack web developer in Canada and this is why I attended and recently have graduated from the specialised bridging program - <a href="https://humber.ca/community/new-to-canada/bridging-programs/net-developer.html" target="_blank">Full Stack .NET Cloud Development</a> at Humber College. 
          </p>
          
      <a href="#contact" className='btn vtn-primary group'> Let's Talk </a>
     
      </div>
      </div>
      
    </section>
  )
}

export default About
