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
    buttonRender = () => {
        if(!this.state.isActive) {
            return <i className="fas fa-bars"></i>
        } else {
            return <i className="fas fa-times"></i>
        }
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="nav-btn">
                    <div onClick={this.toggleNav}>
                        {this.buttonRender()}
                    </div>
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
