import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  // console.log('Hello');
  // // console.log(document.getElementById('messageSent').classList.add('messageSent__none'));
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    
    emailjs.sendForm('service_gfz6eg9', 'template_nevhefa', form.current, 'HAQgnlaZbHE0cdt4g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    const messageSent = document.getElementById('messageSent');
    messageSent.classList.add('messageSent__block');
    setTimeout(() => { 
      messageSent.classList.add('messageSent__none');
    }, 6000)
    document.getElementById('close').addEventListener('click', () => {
      messageSent.classList.add('messageSent__none');
    });
  };
  
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            < MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ismail7ahmadi@gmail.com</h5>
            <a href="mailto:ismail7ahmadi@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            < SiMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Ismail Ahmadi</h5>
            <a href="https://m.me/ismail7ahmadi" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            < IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+1 (365) 476 2022</h5>
            <a href="https://api.whatsapp.com/send?phone=+13564762022" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input className="input" type="text" name="name" placeholder="Your Full Name" required />
          <input className="input" type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="10" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> 
      <div id="messageSent" className="messageSent">
        <div className="messageSent__content">
          <div className="messageSent__content-text center">
            <AiOutlineCheckCircle className='messageSent__content-icon' />
            <p >Thank you <br />Your message was sent</p>
          </div>
          <div className="messageSent__content-close" id='close'>
            <button>x</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact