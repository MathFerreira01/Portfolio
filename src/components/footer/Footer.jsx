import React from 'react'

import "./footer.css"

import {FiInstagram} from 'react-icons/fi'
import {RiTwitterFill} from 'react-icons/ri'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twitter.com'><RiTwitterFill/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
