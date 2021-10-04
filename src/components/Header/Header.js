import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div >
            <nav className='headerStyle'>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "#e2136e"
                }} className='navLinkDesign nav-active' to='/home'>Home</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "#e2136e"
                }} className='navLinkDesign' to='/about'>About us</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "#e2136e"
                }} className='navLinkDesign' to='/services'>Services</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "#e2136e"
                }} className='navLinkDesign' to='/contact'>Contact us</NavLink>
            </nav>
        </div>
    );
};

export default Header;