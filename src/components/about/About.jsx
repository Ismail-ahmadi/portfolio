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
      <h5>Get to Know</h5>
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
            development started back in 2017 when I started to help a bunch of environmentally friendly philatrophists in Jakarta, Indonesia — turns out coding is fun
            <br /><br />Fast-forward to today, I majored in Computer Science and am follwing my dream; everday I am learning new technologies to eqip me in web development. 
          </p>
          
      <a href="#contact" className='btn vtn-primary'> Let's Talk</a>
     
      </div>
      </div>
      
    </section>
  )
}

export default About
