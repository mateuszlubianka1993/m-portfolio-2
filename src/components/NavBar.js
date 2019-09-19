import React from 'react'
import '../style/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="nav-btn">
                    <button>menu</button>
                </div>
                <nav className="nav-container">
                    <div className="links-box">
                        <a className="link">Home</a>
                        <a className="link">About</a>
                        <a className="link">Portfolio</a>
                        <a className="link">Contact</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
