import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'

import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhnjpyq', 'template_wck0lgd', form.current, 'rCVWvSboMo5saRwEM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact_container">
          <div className="contact_options">
            <article className='contact_option'>
              <MdOutlineMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>ferreiramatheus124@gmail.com</h5>
              <a href='ferreiramatheus124@gmail.com'>Envie uma mensagem</a>
            </article>
            <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>55 61 996194498</h5>
              <a href='https://api.whatsapp.com/send?phone=5561996194998'>Envie uma mensagem</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder="Email"/>
            <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Envie uma mensagem</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
