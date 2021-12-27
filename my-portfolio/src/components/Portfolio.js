import React from 'react';

import projects from './projects';
// import musicAppScreenshot from '../img/music-review-club-screenshot.jpg';

export default function Portfolio() {
    
    // const allProjectsArr = [];

    // projects.forEach((item, i) => allProjectsArr.push(

    // )
    // )
    
    return(
        <div>
            <article className="project1" className="border">
                <h3 className="text-center p-2">{projects[0].name}</h3>                
                <a href={projects[0].deployedLink} target="_blank"><img src={projects[0].screenshot}/></a>                
                <a href={projects[0].repoLink} target="_blank"><br/>{projects[0].repoTitle}</a>
                <div class="border"></div>
                <p>{projects[0].description}</p>
            </article>
            <article className="project2" className="border">
                <h3 className="text-center p-2">{projects[1].name}</h3>                
                <a href={projects[1].deployedLink} target="_blank"><img src={projects[1].screenshot}/></a>                
                <a href={projects[1].repoLink} target="_blank"><br/>{projects[1].repoTitle}</a>
                <div class="border"></div>
                <p>{projects[1].description}</p>
            </article>
            <article className="project3" className="border">
                <h3 className="text-center p-2">{projects[2].name}</h3>                
                <a href={projects[2].deployedLink} target="_blank"><img src={projects[2].screenshot}/></a>                
                <a href={projects[2].repoLink} target="_blank"><br/>{projects[2].repoTitle}</a>
                <div class="border"></div>
                <p>{projects[2].description}</p>
            </article>
            <article className="project4" className="border">
                <h3 className="text-center p-2">{projects[3].name}</h3>                
                <a href={projects[3].deployedLink} target="_blank"><img src={projects[3].screenshot}/></a>                
                <a href={projects[3].repoLink} target="_blank"><br/>{projects[3].repoTitle}</a>
                <div class="border"></div>
                <p>{projects[3].description}</p>
            </article>
            <article className="project5" className="border">
                <h3 className="text-center p-2">{projects[4].name}</h3>                
                <a href={projects[4].deployedLink} target="_blank"><img src={projects[4].screenshot}/></a>                
                <a href={projects[4].repoLink} target="_blank"><br/>{projects[4].repoTitle}</a>
                <div class="border"></div>
                <p>{projects[4].description}</p>
            </article>
            <article className="project6" className="border">
                <h3 className="text-center p-2">{projects[5].name}</h3>                
                <a href={projects[5].deployedLink} target="_blank"><img src={projects[5].screenshot}/></a>                
                <a href={projects[5].repoLink} target="_blank"><br/>{projects[5].repoTitle}</a>
                <div class="border"></div>
                <p>{projects[5].description}</p>
            </article>
        </div>
    );
};