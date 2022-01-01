import React from 'react';
import projects from './Projects';
import { AiFillGithub } from "react-icons/ai";
import budgetTracker from './img/Budget-Tracker.gif';
import codingQuiz from './img/coding-quiz-screenshot.jpg';
import healthWellness from './img/health-wellness-screenshot.jpg';
import musicReview from './img/music-review-club-screenshot.jpg';
import weatherDashboard from './img/weather-dashboard-screenshot.jpg';
import workoutTracker from './img/workout-tracker.jpg';
import backgroundImage from './img/coding2.jpg';



export default function Portfolio() {
    
   

    return(
        <div className='row justify-content-evenly' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <article className="project1" className="container-md border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[0].name}</h3>                
                <a href={projects[0].deployedLink} target="_blank"><img className='projectImg' src={musicReview}/></a>                
                <a href={projects[0].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25'/></a>
                <div class="mt-2 border"></div>
                <p>{projects[0].description}</p>
            </article>
            <article className="project2" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[1].name}</h3>                
                <a href={projects[1].deployedLink} target="_blank"><img className='projectImg' src={healthWellness}/></a>                
                <a href={projects[1].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[1].description}</p>
            </article>
            <article className="project3" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[2].name}</h3>                
                <a href={projects[2].deployedLink} target="_blank"><img className='projectImg' src={weatherDashboard}/></a>                
                <a href={projects[2].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[2].description}</p>
            </article>
            <article className="project4" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[3].name}</h3>                
                <a href={projects[3].deployedLink} target="_blank"><img className='projectImg' src={codingQuiz}/></a>                
                <a href={projects[3].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[3].description}</p>
            </article>
            <article className="project5" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[4].name}</h3>                
                <a href={projects[4].deployedLink} target="_blank"><img className='projectImg' src={budgetTracker}/></a>                
                <a href={projects[4].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[4].description}</p>
            </article>
            <article className="project6" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[5].name}</h3>                
                <a href={projects[5].deployedLink} target="_blank"><img className='projectImg' src={workoutTracker}/></a>                
                <a href={projects[5].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[5].description}</p>
            </article>
        </div>
        
    );
};