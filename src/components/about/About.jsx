import React from 'react'
import './about.css'
import ME from '../../assets/About-Me.jpg'
import {FaAward} from 'react-icons/fa'
import {SiMajorleaguehacking} from 'react-icons/si'
import {VscFolderLibrary} from 'react-icons/vsc'
export const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
     <div className='about__me'>
      <div className='about__me-image'>
        <img src={ME} alt="About Image"/>
      </div>
     </div>
    <div className='about__content'>
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years Developing</small>
        </article>

        <article className='about__card'>
          <SiMajorleaguehacking className='about__icon'/>
          <h5>Hackathons</h5>
          <small>5 Hackathons Attended</small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>10+ Projects Completed</small>
        </article>
      </div>
      
      <p>
      Howdy Folks, I'm Tushar, a passionate Mobile and Web Developer, with prior knowledge of Databases and Frameworks.
      I have strong command over Object Oriented Programming Languages, and can implement them in real-life problems to find solutions.
      I possess strong Leadership and Problem-Solving ability, and am willing to put them to use in a fast-paced environment. 
      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>

    </div>
    </div>
   </section>
  )
}
export default About