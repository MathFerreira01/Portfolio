import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>

          <div className='about_me-image'>
            <img src={ME} alt='About Image'/>
          </div>

          <div className='about_content'>
            <div className="about_cards">

              <article className='about_cards'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about_cards'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about_cards'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>80+ completed</small>
              </article>

            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque, cupiditate, minima quibusdam omnis ab maxime distinctio iste odit consequatur similique dolores perspiciatis ratione porro ipsam qui voluptates eaque quisquam.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
