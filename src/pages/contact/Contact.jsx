import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
  <div className=' main-container'>
      <div className="contact-container">
        <form action="" className="contact-left">
            <div className="contact-left-title">
                <h2>Get in touch </h2>
            </div>
            <input type="text" name="Name" placeholder="Your Name" className="contact-inputs" required/>
            <input type="Email" name="Email" placeholder="Your Email" className="contact-inputs" required/>
            <textarea name="Message"  placeholder="Your Message" className="contact-inputs" required></textarea>
            <button type="submit"> Submit </button>
        </form>
    </div>
  </div>
  )
}

export default Contact
