import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo-freelancee.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-links">
          <li><a id='home' href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-hire">
            <a href="#hire">Hire Me</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
