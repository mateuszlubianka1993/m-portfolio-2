import React from 'react'
import Particles from 'react-particles-js';
import particlesParams from '../config/particleJsConfig';
import '../style/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-mask">
                <div className="section-content">
                    <div className="about-header">
                        <h2>About me</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-content-box">
                            <div className="about-image-border">
                                <div className="about-image"></div>
                            </div>
                        </div>
                        <div className="about-content-box right-box">
                            <h3 className="about-txt-header">Hi! My name is Mateusz.</h3>
                            <p className="about-txt">
                                I am 26 years old and I'm Front End Developer. I live in Warsaw. 
                            </p>
                        </div>
                    </div>          
                </div>
                <Particles params={particlesParams} className="particles-box"/>     
            </div>
        </div>
    )
}

export default About
