import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Going Green in Jakarta',
    github: 'https://github.com/Ismail-ahmadi/going-green-in-jakarta',
    demo: 'https://goinggreeninjakarta.org/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Canada 2022 For Me',
    github: 'https://github.com/Ismail-ahmadi/photo-gallery',
    demo: 'https://ismail-ahmadi.github.io/photo-gallery/'
  },
  {
    id:3,
    image: IMG4,
    title: 'Drawing App',
    github: 'https://github.com/Ismail-ahmadi/drawingApp',
    demo: 'https://ismail-ahmadi.github.io/drawingApp/'
  },
  {
    id:4,
    image: IMG3,
    title: 'Sample E-Portfolio',
    github: 'https://github.com/Ismail-ahmadi/E-portfolio',
    demo: 'https://ismail-ahmadi.github.io/E-portfolio/'
  },
  
  {
    id:5,
    image: IMG5,
    title: 'Payment App - Assignment',
    github: 'https://github.com/wearecodets/hw2-Ismail-ahmadi',
    demo: 'https://master--hw2-ismail.netlify.app/'
  }
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key ={ id } className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={ image } alt= { title } />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio__item-cta">
                  <a href={ github } className="btn btn-slim" target="_blank">GitHub</a>
                  <a href={ demo } className="btn btn-primary btn-slim" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          } )
        }        
      </div>
    </section>
  )
}

export default Portfolio
