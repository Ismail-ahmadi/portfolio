import React from 'react'
import CV from '../../assets/IsmailAhmadi_Resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn'> Downlaod Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
