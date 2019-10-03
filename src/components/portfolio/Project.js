import React from 'react';
import '../../style/Project.css';

const Project = ({project, active}) => {
    
    return (
        <div className={active === project.index ? 'project-container active' : 'project-container'} 
        style={{'backgroundImage': `url(${project.img})`}}>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.stack}</p>
            <div className="project-buttons">
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer"><button className="project-btn"><i className="far fa-file-code"></i></button></a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><button className="project-btn"><i className="far fa-eye"></i></button></a>
            </div>
        </div>
    )
}

export default Project;
