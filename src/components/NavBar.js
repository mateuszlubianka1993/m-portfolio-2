import React from 'react'
import {Link} from 'react-router-dom';
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
                        <Link to="/" className="link">Home</Link>
                        <Link to="/about" className="link">About</Link>
                        <Link className="link">Portfolio</Link>
                        <Link className="link">Contact</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
