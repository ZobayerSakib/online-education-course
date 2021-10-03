import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div >
            <nav className='headerStyle'>
                <NavLink className='navLinkDesign' to='/home'>Home</NavLink>
                <NavLink className='navLinkDesign' to='/about'>About Us</NavLink>
                <NavLink className='navLinkDesign' to='/services'>Services</NavLink>
                <NavLink className='navLinkDesign' to='/contact'>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;