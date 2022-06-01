import React from 'react'
import './Navbar.css'
import {CgProfile} from 'react-icons/cg'
import {VscBriefcase} from 'react-icons/vsc'
import {VscGift} from 'react-icons/vsc'
import {AiOutlineFileDone} from 'react-icons/ai'
import {FiMessageCircle} from 'react-icons/fi'

import {useState} from 'react'

const Navbar = ()  => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <navbar>
      <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><CgProfile/></a>
      <a href="#skills" onClick={() => setActiveNav ('#skills')} className={activeNav === '#' ? 'active' : ''} ><VscBriefcase/></a>
      <a href="#services" onClick={() => setActiveNav ('#services')} className={activeNav === '#' ? 'active' : ''}><VscGift/></a>
      <a href="#step" onClick={() => setActiveNav ('#step')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineFileDone/></a>
      <a href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === '#' ? 'active' : ''}><FiMessageCircle/></a>
    </navbar>
  )
}

export default Navbar