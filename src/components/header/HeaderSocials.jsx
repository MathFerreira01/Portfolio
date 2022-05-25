import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/matheus-ferreira-santos-852917207/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/MathFerreira01?tab=repositories" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
