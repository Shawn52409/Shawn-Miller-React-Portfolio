import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <header className='navBar'>
            <div>
                <nav className=''>
                    <NavLink to='/' exact className='myName ms-3 fs-1'>
                        Shawn Miller
                    </NavLink>                   
                    <NavLink to='/about' className='link p-3'>
                        About Me
                    </NavLink>                   
                    <NavLink to='/portfolio' className='link p-3'>
                        Portfolio
                    </NavLink>                   
                    <NavLink to='/contact' className='link p-3'>
                        Contact
                    </NavLink>                   
                    <NavLink to='/resume' className='link p-3'>
                        Resume
                    </NavLink> 
                </nav>
            </div>   
        </header>
    );
};