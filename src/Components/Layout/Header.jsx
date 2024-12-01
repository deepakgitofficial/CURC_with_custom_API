import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='shadow-lg mb-7 sticky bg-white inset-y-0'>
        <div className="container mx-auto p-4">
            <div className="header-row">
            <div className="column">
                <h4 style={{color: 'orange', fontWeight:'bold'}}><NavLink to="/">LOGO</NavLink></h4>
            </div>
                <div className="column">
                   <div className="navbar">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="about">About</NavLink></li>
                            <li><NavLink to="service">Product</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                   </div>
                </div>
            </div> 
        </div>
    </header>
  )
}

export default Header