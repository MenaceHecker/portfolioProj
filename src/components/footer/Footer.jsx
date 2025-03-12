import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MENACE</a>

      <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#cv">CV</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://discord.com"><BsDiscord/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MENACE STUDIOS. All rights reserved</small>
      </div>
    </footer>
  )
}
export default Footer