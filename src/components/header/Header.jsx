import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/user.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Olá, eu sou</h5>
        <h1>Matheus</h1>
        <h5 className='text-light'>Desenvolvedor Frontend</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
