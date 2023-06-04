import React from 'react'
import './Contact.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Contact() {
  return (
    <div className="contact-page">
        <div className="contact-container">
            <h2>Contact Us</h2>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Write your message here"></input>
            <button>Submit</button>
        </div>
    </div>

  )
}

export default Contact