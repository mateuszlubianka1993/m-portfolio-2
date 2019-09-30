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
                <button className="project-btn"><i className="far fa-file-code"></i></button>
                <button className="project-btn"><i className="fas fa-info"></i></button>
                <button className="project-btn"><i className="far fa-eye"></i></button>
            </div>
        </div>
    )
}

export default Project;
