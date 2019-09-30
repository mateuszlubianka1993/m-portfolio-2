import React from 'react';
import '../../style/Project.css';

const Project = ({project, active}) => {
    
    return (
        <div className={active === project.index ? 'project-container active' : 'project-container'}>
            
            {project.title}
        </div>
    )
}

export default Project;
