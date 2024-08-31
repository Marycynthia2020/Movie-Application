import React, { useState } from 'react'
import streamlogo from "../assets/streamlogo.png"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./nav.css"

const Nav = () => {

  const [mobile, setMobile] = useState(false)

  const handleClick =() => setMobile(!mobile)
  return (
    <div className="header">
        <div>
            <img src={streamlogo} alt= "logo"className="none" />
        </div>
        <nav className= {mobile? "nav": "no-display"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Series</NavLink>
            <NavLink to="/">Movies</NavLink>
            <NavLink to="/">Pages</NavLink>
            <NavLink to="/">Pricing</NavLink>
            <NavLink to="/">Contact</NavLink>
        </nav>
        <div className="icons"> 
            <FontAwesomeIcon icon={faSearch}  className='icon'/>
            <FontAwesomeIcon icon={faBell} className='icon'/>
          
            <FontAwesomeIcon icon={faUser} className='icon' />

        </div>
        <button className="toggle" onClick={handleClick}>{mobile? <FontAwesomeIcon icon={faTimes} className='icon' />: <FontAwesomeIcon icon={faBars} className='icon' />}</button>
        <button className ="subscribe">Subscribe Now</button>

    </div>
  )
}

export default Nav