import React from 'react';
import myPhoto from './img/shawn.jpg'
import backgroundImage from './img/coding2.jpg';

export default function About() {
    return(
        <div className='container-fluid about' style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='container-md row justify-content evenly'>
                <div className='col-sm-3 '>
                    <img className='myPhoto' src={myPhoto}/>                
                </div>
                <div className='col-sm-7 myBio'>
                    <h1 className='text-center'>Who am I?</h1>
                    <p>Hello everyone, I am <u>Shawn Miller</u> from Columbus, Ohio. I have been interested in computer programming ever since I wrote programs on my TI-82 graphing calculator in high school. I am a very motivated individual. Throughout my years in high school, I earned my Eagle Scout, earned a varsity letter on swim team, performed in marching band and even held a part time job. <br/> <br/> I went on to spend a year at Bowling Green State University majoring in Computer Science before transferring to Devry University to earn my Bachelor's degree in Electronic Engineering Technology. After spending time in the field mastering computer hardware repair I went back to school to finish learning how to write and debug software. I recently earned a certificate in Full Stack Coding from The Ohio State University. I am motivated to start a new career in the field of software development. <br/> <br/> I am <u>confident</u> that I can bring my passion for <u>quick learning</u>, <u>motivation</u>, and years of <u>technical background</u> to help a team achieve its goals in web development. </p>
                </div>
            </div>            
        </div>
    );
};