import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { validateEmail } from '../utils/helper';
import backgroundImage from './img/coding2.jpg';
import { AiFillGithub, AiOutlineFontSize, AiOutlineTwitter, AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    
    // Declare variables for contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, seterrorMessage] = useState('');

    const handleInputChange = (evt) => {
        if (evt.target.name === 'email') {
            // Check to make sure the email address entered is valid
            const emailValid = validateEmail(evt.target.value);
            if(emailValid) {
                seterrorMessage('');                
            } else {
                seterrorMessage('Please enter a valid email address.')
            }
        } else {
            // Check to make sure nothing was left blank
            if (evt.target.value.length) {
                seterrorMessage('');
            } else {
                seterrorMessage(`${evt.target.name} is required.`)
            }
        }
        // If no error message then
        if (!errorMessage) {
            if (evt.target.name === 'name') {
                setName(evt.target.value);
            } else if (evt.target.name === 'email') {
                setEmail(evt.target.value)
            } else {
                setMessage(evt.target.value)
            }
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

    }




    return(
        <div className='contactForm' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Row>
                <Col>
                <article id="contact-me" class="border">                            
                <div className='text-center'>
                    <h2>Please feel free to contact me...</h2>
                        <div>
                            <a href="mailto:shawnsmm@gmail.com" target='_blank' style={{ color: 'white' }}><AiOutlineMail size='25px' /><span className='link p-3'>shawnsmm@gmail.com</span></a>
                        </div>
                        <div>
                            <a href="https://github.com/Shawn52409" target='_blank' style={{ color: 'white' }}><AiFillGithub size='25px' /><span className='link p-3'>https://github.com/Shawn52409</span></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/shawn-miller-b44a36217/" target='_blank' style={{ color: 'white' }}><FaLinkedinIn size='25px'/><span className='link p-3'>https://www.linkedin.com/in/shawn-miller-b44a36217</span></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/ShawnMiller524" target='_blank' style={{ color: 'white' }}><AiOutlineTwitter size='25px' /><span className='link p-3'>https://twitter.com/ShawnMiller524</span></a>
                        </div>
                    </div>
                    </article>        
                    {/* <h2 className='contactTitle'>Please feel free to contact me...</h2>
                    <form className='form'>
                        <div className='mt-4'>
                            <label>Name:</label>
                            <input
                                className='form-control'
                                name='name'
                                onBlur={handleInputChange}
                                type='text'
                                placeholder='Name'
                            />
                        </div>
                        <div className='mt-4'>
                            <label>Email:</label>
                            <input
                                className='form-control'
                                name='email'
                                onBlur={handleInputChange}
                                type='text'
                                placeholder='Email'
                            />
                        </div>
                        <div className='mt-4'>
                            <label>Message:</label>
                            <input
                                className='form-control input-lg'
                                name='message'
                                onBlur={handleInputChange}
                                type='text'
                                placeholder='Message'
                                rows={6}
                            />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <div className='mt-4 mb-4' >
                            <button data-testid='button' class="btn btn-primary" type="submit" onSubmit={handleFormSubmit}>Submit</button>
                        </div>
                    </form> */}
                </Col>
            </Row>         
        </div>
    );
};