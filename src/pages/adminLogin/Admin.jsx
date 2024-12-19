import React from 'react'
import "./admin.css"

const Admin = () => {
  return (
  <div className=' main-container'>
      <div className="contact-container">
        <form action="" className="contact-left">
            <div className="contact-left-title">
                <h2>Log In </h2>
            </div>
            <input type="Email" name="Email" placeholder="Your Email" className="contact-inputs" required/>
            <input type="password" name="password" placeholder="Enter your password" className="contact-inputs" required/>
            <button type="submit"> Log In </button>
        </form>
    </div>
  </div>
  )
}

export default Admin