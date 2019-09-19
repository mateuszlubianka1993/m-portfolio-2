import React from 'react'
import '../style/NavBar.css';

class NavBar extends React.Component {
    state = {
        isActive: false
    }
    toggleNav = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="nav-btn">
                    <button onClick={this.toggleNav}>menu</button>
                </div>
                <nav className={this.state.isActive ? 'open-nav nav-container' : 'close-nav nav-container'}>
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
