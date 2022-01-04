import React from 'react';
import { Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <div className='navBar' >
            <Row>
                <Col xs lg='6'>
                    <h1 className='myName p-3'>Shawn Miller</h1>
                </Col>
                <Col md='auto'>
                    <NavLink to='/' exact className='link p-3 text-center'>About Me</NavLink> 
                </Col>    
                <Col md='auto'>
                    <NavLink to='/portfolio' className='link p-3 text-center'>Portfolio</NavLink>                   
                </Col>    
                <Col md='auto'>
                    <NavLink to='/contact' className='link p-3 text-center'>Contact</NavLink>                   
                </Col>    
                <Col md='auto'>
                    <NavLink to='/resume' className='link p-3 text-center'>Resume</NavLink>
                </Col>    
            </Row>                   
        </div>
    );
};