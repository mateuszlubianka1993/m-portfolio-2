import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="nav-btn">
                    <div className="btn-line" id="btn-line-1"></div>
                    <div className="btn-line" id="btn-line-2"></div>
                    <div className="btn-line" id="btn-line-3"></div>
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
