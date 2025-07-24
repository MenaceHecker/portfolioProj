import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tushar-mishra-7960b722b/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/tu.shaw.r25/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/MenaceHecker" target="_blank"><FaGithub/></a>
        
        </div>
  )
}

export default HeaderSocials