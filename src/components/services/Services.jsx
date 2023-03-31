import React from 'react'
import './services.css'
import {FaCheck} from 'react-icons/fa'

function Services() {
  return (
    <section id="services">
      <h5>Licenses & certifications</h5>
      <h2>Qualification</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Technical and hard skills</h3>
          </div>
          <ul className="service__list">
          <li><FaCheck className='service__list-icon' />
              <p>Associate Degree in Computer Science</p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>The Complete Web Development Course by Udemy</p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>MySQL Database Development Mastery by Udemy</p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>The Complete Node.JS Course by Mosh Hamadani </p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>React.JS Essential Training by Eve Porcello</p>
            </li>
            
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Other skills</h3>
          </div>
          <ul className="service__list">
          <li><FaCheck className='service__list-icon' />
              <p>Associate Degree of Arts</p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>Agile Crash Course for Beginner by Nezam Academy</p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>Research Skills by Mohawk College</p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>Workplace Culture by Mohawk College </p>
            </li>
            <li><FaCheck className='service__list-icon' />
              <p>The Agile Foundations by Doug Rose </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services
