import React from 'react';


export default function About() {
    return(
        <div className='container-fluid about' style={{ backgroundImage: "url(/img/coding2.jpg)" }}>
            <div className='container-md row justify-content evenly'>
                <div className='col-4 '>
                    <img className='myPhoto' src='/img/shawn.jpg'/>                
                </div>
                <div className='col-4 myBio'>
                I am currently enrolled in an Ohio State University coding boot camp while I hold a day job as a Senior Technical Manager at Chuck E. Cheese. I troubleshoot and repair the latest arcade machines, an animatronic show and many other restaurant equipment. I joined the bootcamp to move my education from computer hardware to software. I love learning new things and cannot wait to join a company and use all my background to develope new and exciting web pages.
                </div>
            </div>            
        </div>
    );
};