import React from 'react'
import Particles from 'react-particles-js';
import particlesParams from '../config/particleJsConfig';
import '../style/general.css';
import '../style/About.css';

const About = () => {
    return (
        <div className="about-container section-container">
            <div className="about-mask section-mask">
                <div className="section-content">
                    <div className="about-content">
                        <div className="about-content-box">
                            <div className="about-image-border">
                                <div className="about-image"></div>
                            </div>
                        </div>
                        <div className="about-content-box right-box">
                            <div className="about-txt">
                                <h3 className="about-txt-header">Hi! My name is Mateusz.</h3>
                                <p>I am 26 years old and I live in Warsaw. I'm looking for a job as Front End Developer.
                                    Please check out my portfolio and feel free to contact me.
                                </p>
                            </div>
                        </div>
                    </div>          
                </div>
                <Particles params={particlesParams} className="particles-box"/>     
            </div>
        </div>
    )
}

export default About
