import React from 'react';
import projects from './Projects';
import { AiFillGithub } from "react-icons/ai";
// import powerUp from './img/powerup_gif.gif';
// import budgetTracker from './img/Budget-Tracker.gif';
// import codingQuiz from './img/coding-quiz-screenshot.jpg';
// import healthWellness from './img/health-wellness-screenshot.jpg';
// import musicReview from './img/music-review-club-screenshot.jpg';
// import weatherDashboard from './img/weather-dashboard-screenshot.jpg';
// // import workoutTracker from './img/workout-tracker.jpg';
import backgroundImage from './img/coding2.jpg';



export default function Portfolio() {  
    return(
        <div className='row justify-content-evenly' style={{ backgroundImage: `url(${backgroundImage})` }}>
                {projects.map((project) => {                    
                    return (
                        <article className="project" className="container-md col-md-3 p-3 m-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className="text-center p-2">{project.name}</h3>                
                        <a href={project.deployedLink} target="_blank"><img className='projectImg' src={require(`${project.screenshot}`)}/></a>                
                        <a href={project.repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25'/></a>
                        <div className="mt-2 border"></div><br/>                        
                        <h4>Technology Used:</h4>
                        <p>{project.techUsed}</p>                    
                        <h4>Description:</h4>
                        <p>{project.description}</p>                    
                        </article>
                    );
                })}
        </div>        
    );
};