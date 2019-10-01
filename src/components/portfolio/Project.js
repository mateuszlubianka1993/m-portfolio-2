import React from 'react';
import '../../style/Project.css';

const Project = ({project, active}) => {
    
    return (
        <div className={active === project.index ? 'project-container active' : 'project-container'} 
        style={{'backgroundImage': `url(${project.img})`}}>
            {/* <div className="project-mask"></div> */}
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">Jedno zdanie o projekcie. Albo jednak dwa.</p>
            <div className="project-buttons">
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer"><button className="project-btn"><i className="far fa-file-code"></i></button></a>
                <button className="project-btn"><i className="fas fa-info"></i></button>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><button className="project-btn"><i className="far fa-eye"></i></button></a>
            </div>
        </div>
    )
}

export default Project;
