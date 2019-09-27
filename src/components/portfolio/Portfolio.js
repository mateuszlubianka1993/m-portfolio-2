import React, { Component } from 'react';
import data from '../../data/data';
import Project from './Project';

class Portfolio extends Component {
    state = {
        projects: data.projects,
        project: data.projects[0]
    };

    nextProject() {
        const updateIndex = this.state.project.index+1;
        this.setState({
            project: data.projects[updateIndex]
        });
    };

    prevProject() {
        const updateIndex = this.state.project.index-1;
        this.setState({
            project: data.projects[updateIndex]
        });
    };

    render() {
        const {project, projects} = this.state;
        return (
            <div className="portfolio-container">
               <button 
                className="button next-button"
                onClick={() => this.nextProject()}
                disabled={project.index === data.projects.length-1}
                >Next</button>
               <button 
                className="button prev-button"
                onClick={() => this.prevProject()}
                disabled={project.index === 0}
                >Prev</button>

                <div className="slider">
                    <Project project={project}/>
                </div>
            </div>
        );
    };
}

export default Portfolio;
