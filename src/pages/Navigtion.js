import React from 'react';
//import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css';
//import { ReactComponent as Brand } from '.,/images/travel-concept-with-baggage.jpg'
import logo from '../images/logo.jpg'


function NavigationBar()
{
    
    return (
        
       <nav className="navbar">
        <div className="container">
            <div className='logo'>
            <img src={logo} alt="logo 50x50.png" style={{width: '100px', height: "57px"}}/>
            </div>

            <div className='nav-elements'>
            <ul>
                <li>
                    <NavLink to="/" style={{color: "#00134d"}}><b>Home</b></NavLink>
                </li>
                <li>
                    <NavLink to="/booking" style={{color: "#00134d"}}><b>Booking</b></NavLink>
                </li> 
                <li>
                    <NavLink to="/about" style={{color: "#00134d"}}><b>About</b></NavLink>
                </li>
                <li>
                    <NavLink to="/contact" style={{color: "#00134d"}}><b>Contact</b></NavLink>
                </li>  
                        
            </ul>
        </div>
        </div>
        
       </nav> 
    );
}

export default NavigationBar;