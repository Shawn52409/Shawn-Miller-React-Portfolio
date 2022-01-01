import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineFontSize, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return(
        <div className='footer'>
            <Row>
                <Col md='4'>
                    <p>Designed and Developed by Shawn Miller</p>
                </Col>
                <Col md='4'>
                    <p>2021</p>           
                </Col>
                <Col md='4'>
                    <ul className='iconLinks'>
                        <li className='iconLinks'>
                            <a href="https://github.com/Shawn52409" target='_blank' style={{ color: 'white' }}><AiFillGithub size='25px' /></a>
                        </li>
                        <li className='iconLinks'>
                            <a href="https://www.linkedin.com/in/shawn-miller-b44a36217/" target='_blank' style={{ color: 'white' }}><FaLinkedinIn size='25px'/></a>
                        </li>
                        <li className='iconLinks'>
                            <a href="https://twitter.com/ShawnMiller524" target='_blank' style={{ color: 'white' }}><AiOutlineTwitter size='25px' /></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};