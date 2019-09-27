import React, { Component } from 'react';
import data from '../../data/data';

class Portfolio extends Component {
    state = {
        projects: data.projects,
        project: [0]
    };

    render() {
        console.log(this.state.projects)
        return (
            <div>
               Portfolio 
            </div>
        );
    };
}

export default Portfolio;
