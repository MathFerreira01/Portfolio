import React from 'react'
import CV from '../../assets/CV - Matheus Ferreira Santos.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Vamos conversar</a>
    </div>
  )
}

export default CTA
 