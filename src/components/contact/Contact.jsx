import React from 'react'

import './contact.css'

import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
          <div className="contact_options">
            <article className='contact_option'>
              <MdOutlineMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>ferreiramatheus124@gmail.com</h5>
              <a href='ferreiramatheus124@gmail.com'>Send a message</a>
            </article>
            <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+55 61 996194498</h5>
              <a href='https://api.whatsapp.com/send?phone+5561996194498'>Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form action=''>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder="Email"/>
            <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
