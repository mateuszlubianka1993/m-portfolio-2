import React from 'react'
import '../style/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-mask-left"><div className="mask-border-left"></div></div>
            <div className="home-mask-right"><div className="mask-border-right"></div></div>
            <header className="home-header">
                <div className="header-txt">
                    <h1>Mateusz Łubianka</h1>
                    <h2>Front End Developer</h2>
                </div>
            </header>
        </div>
    )
}

export default Home
