import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vpp6cp', 'template_arg334i', form.current, 'Y6jmvZr3pYUTtR98A')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Let's be in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>tm93754@uga.edu</h5>
          <a href="mailto:mtushar2508@gmail.com" target="_blank">Send an email</a>
        </article>
        <article className="contact__option">
          <AiOutlineInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>tu.shaw.r25</h5>
          <a href="https://www.instagram.com/tu.shaw.r25" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsDiscord className='contact__option-icon'/>
          <h4>Discord</h4>
          <h5>Menace25#0919</h5>
          <a href="https://discordapp.com/users/805727928700502036" target="_blank">Send a message</a>
        </article>
        </div>
    {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
        
      </div>
      
      </section>
  )
}
export default Contact