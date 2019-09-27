import React from 'react';
import '../../style/Project.css';

const Project = ({project}) => {
    return (
        <div className="project-container">
            {project.title}
        </div>
    )
}

export default Project;
