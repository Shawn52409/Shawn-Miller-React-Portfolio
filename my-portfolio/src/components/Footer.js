import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
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
                            <a href="https://github.com/Shawn52409" target='_blank' style={{ color: 'white' }}><AiFillGithub /></a>
                        </li>
                        <li className='iconLinks'>
                            <a href="https://www.linkedin.com/in/shawn-miller-b44a36217/" target='_blank' style={{ color: 'white' }}><FaLinkedinIn /></a>
                        </li>
                        <li className='iconLinks'>
                            <a href="https://twitter.com/ShawnMiller524" target='_blank' style={{ color: 'white' }}><AiOutlineTwitter /></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};