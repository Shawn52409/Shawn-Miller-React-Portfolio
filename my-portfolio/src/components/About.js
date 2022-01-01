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
                I am currently enrolled in an Ohio State University coding boot camp while I hold a day job as a Senior Technical Manager at Chuck E. Cheese. I troubleshoot and repair the latest arcade machines, an animatronic show and many other restaurant equipment. I joined the bootcamp to move my education from computer hardware to software. I love learning new things and cannot wait to join a company and use all my background to develope new and exciting web pages.
                </div>
            </div>            
        </div>
    );
};