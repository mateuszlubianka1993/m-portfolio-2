import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesParams from '../../config/particleJsConfig';
import data from '../../data/data';
import Project from './Project';
import '../../style/Portfolio.css';

class Portfolio extends Component {
    state = {
        projects: data.projects,
        project: data.projects[0],
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
                <div className="portfolio-mask">
                    <div className="section-content">
                        <div className="portfolio-content">
                            <div className="slider">
                                <div className="slider-wrapper" style={{
                                    'transform': `translateX(-${project.index*(100/projects.length)}%)`
                                }}>
                                    {projects.map(project => <Project project={project} active={this.state.project.index} key={project.index}/>)}
                                </div>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <button 
                            className="button next-button"
                            onClick={() => this.nextProject()}
                            disabled={project.index === data.projects.length-1}
                            ><i className="far fa-hand-point-left"></i></button>
                            <button 
                            className="button prev-button"
                            onClick={() => this.prevProject()}
                            disabled={project.index === 0}
                            ><i className="far fa-hand-point-right"></i></button>
                        </div>
                    </div>
                    <Particles params={particlesParams} className="particles-box"/>
                </div>
            </div>
        );
    };
}

export default Portfolio;
