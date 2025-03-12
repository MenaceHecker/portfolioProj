import React from 'react'
import './projects.css'
import IMG1 from '../../assets/proj1.jpg'
import IMG2 from '../../assets/proj2.jpg'
import IMG3 from '../../assets/proj3.jpg'
import IMG4 from '../../assets/proj4.jpg'
import IMG5 from '../../assets/proj5.jpg'
import IMG6 from '../../assets/proj6.jpg'


const data = [
{
  id: 1,
  image: IMG1,
  title: 'Article.ly, the Article Verifying App',
  github: 'https://github.com/MenaceHecker/GSUHacks',
  demo: 'https://github.com/MenaceHecker/GSUHacks'
},
{
  id: 2,
  image: IMG2,
  title: 'Calc n Speak',
  github: 'https://github.com',
  demo: 'https://github.com'
},
{
  id: 3,
  image: IMG3,
  title: 'eduNFT, a website for trade for NFTs',
  github: 'https://github.com/MenaceHecker/eduNFT',
  demo: 'https://github.com/MenaceHecker/eduNFT'
},
{
  id: 4,
  image: IMG4,
  title: 'Simulate Invest',
  github: 'https://github.com/MenaceHecker/SimulateInvest-main/tree/main/SimulateInvest-main',
  demo: 'https://github.com/MenaceHecker/SimulateInvest-main/tree/main/SimulateInvest-main'
},
{
  id: 5,
  image: IMG5,
  title: 'Weather Today App',
  github: 'https://github.com',
  demo: 'https://github.com'
},
{
  id: 6,
  image: IMG6,
  title: 'Quiz App, a Geography Quiz App',
  github: 'https://github.com/MenaceHecker/MyQuizApp',
  demo: 'https://github.com/MenaceHecker/MyQuizApp',
}
]



export const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
      </article>
          )
        })
      }
      </div>
    </section>
  )
}
export default Projects