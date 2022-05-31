import React from 'react'

import "./footer.css"

import {FiInstagram} from 'react-icons/fi'
import {RiTwitterFill} from 'react-icons/ri'

function Footer() {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#experience'>Experiência</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.instagram.com/ferre1ra_mt/'><FiInstagram/></a>
        <a href='https://twitter.com/ferreiramathe11'><RiTwitterFill/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
