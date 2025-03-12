import React from 'react'
import CV from '../../assets/cv.pdf'
export const CTA = () => {
  return (
    <div classname='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Chat with me</a>
    </div>
  )
}
export default CTA