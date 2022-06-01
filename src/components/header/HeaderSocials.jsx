import React from 'react'
import {BsLinkedin} from 'react-icons/bs'; 
import {BsGithub} from 'react-icons/bs'; 
import {AiOutlineInstagram} from 'react-icons/ai'; 

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/oceanesalle/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
      <a href="https://github.com/oceanesalle" target="_blank" rel="noreferrer"> <BsGithub/> </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <AiOutlineInstagram/> </a>
    </div>

  )
}

export default HeaderSocials