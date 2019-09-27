import React, { Component } from 'react';
import data from '../../data/data';

class Portfolio extends Component {
    state = {
        projects: data.projects,
        project: data.projects[0]
    };

    render() {
        const {project, projects} = this.state;
        return (
            <div>
               Portfolio 
            </div>
        );
    };
}

export default Portfolio;
