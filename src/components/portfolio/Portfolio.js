import React, { Component } from 'react';
import data from '../../data/data';

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
               Portfolio 
            </div>
        );
    };
}

export default Portfolio;
