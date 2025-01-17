import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-section bg-lime-100'>
      <div className="container  p-4 mt-5">
        <h3 className='text-center mt-4'>Footer</h3>
        <div className="navbar">
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="service">Services</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer