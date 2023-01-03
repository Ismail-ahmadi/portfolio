import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const dataFrontend = [
  {
    name: "HTML5",
    level: "Experienced",
  },
  {
    name: "CSS",
    level: "Experienced",
  },
  {
    name: "Boostrap",
    level: "Intermediate",
  },
  {
    name: "Vanila JavaScript + DOM",
    level: "Experienced",
  },
  {
    name: "jQuery",
    level: "Intermediate",
  },
  {
    name: "React JS",
    level: "Intermediate",
  }
]
const dataBackend = [
  {
    name: "Node JS",
    level: "Intermediate",
  },
  {
    name: "MySQL",
    level: "Intermediate",
  },
  {
    name: "MongoDB - Mongoose",
    level: "Intermediate",
  },
  {
    name: "PHP",
    level: "Intermediate",
  },
  {
    name: "Python",
    level: "Intermediate",
  },
  {
    name: "Java",
    level: "Intermediate",
  }
]

function Experience() {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            {
              dataFrontend.map(({name, level}, index) => {
                return(
                  <article key ={ index } className='experience__details'>
                    < BsBookmarkCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{ name }</h4>
                      <small className='text-light'>{ level }</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        {/* End of Front end Development */}
        <div className="experience__backend">
          <h3>Back End Development</h3>
          <div className="experience__content">
            {
              dataBackend.map(({name, level}, index) => {
                return(
                  <article className='experience__details'>
                   < BsBookmarkCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{ name }</h4>
                      <small className='text-light'>{ level }</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        {/* End of Back end Development */}
      </div>
    </section>
  )
}

export default Experience