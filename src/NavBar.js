import React from 'react';
import './NavBar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='NavBar-nav'>

            <NavLink to="/soda">Soda</NavLink>
            <NavLink to="/cake">Cake</NavLink>
            <NavLink to="/chips">Chips</NavLink>
        </nav>
    ) 
}

export default NavBar;

