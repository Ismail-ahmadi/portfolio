import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'New Title here for you',
    github: 'http://github.com',
    demo: 'https://www.google.com/'
  },
  {
    id:2,
    image: IMG1,
    title: 'New Title here for you',
    github: 'http://github.com',
    demo: 'https://www.google.com/'
  },
  {
    id:3,
    image: IMG1,
    title: 'New Title here for you',
    github: 'http://github.com',
    demo: 'https://www.google.com/'
  },
  {
    id:4,
    image: IMG1,
    title: 'New Title here for you',
    github: 'http://github.com',
    demo: 'https://www.google.com/'
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
                  <a href={ github } className="btn" target="_blank">GitHub</a>
                  <a href={ demo } className="btn btn-primary" target="_blank">Live Demo</a>
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
