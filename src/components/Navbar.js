import React from 'react';
import { Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <div className='navBar' >
            <Navbar>
                <h1 className='myName p-3'>Shawn Miller</h1>
                    <NavLink to='/' exact className='link p-3'>
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
            </Navbar>   
        </div>
    );
};