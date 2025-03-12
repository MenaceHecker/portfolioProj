import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {SiCountingworkspro} from 'react-icons/si'
import {MdOutlineContactMail} from 'react-icons/md'
import{MdComputer} from 'react-icons/md'
import { useState } from 'react'
export const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><MdComputer/></a>
      <a href="#cv" onClick={() => setActiveNav('#cv')} className={activeNav==='#cv' ? 'active' : ''}><BiBook/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><SiCountingworkspro/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
    </nav>
  )
}
export default Nav