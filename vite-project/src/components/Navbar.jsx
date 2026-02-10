import React from 'react'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <h3>MyAgency</h3>
      <div>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar