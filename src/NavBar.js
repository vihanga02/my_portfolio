import {Link} from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/360_F_353903472_pXZ24g7X9HHyZOAdOsHGARXhOuhns1DX.jpg?raw=true" alt="VM" />
            <div className="links">
                <Link to="/my_portfolio/">Home</Link>
                <Link to="/my_portfolio/about">About</Link>
                <Link to="/my_portfolio/projects">Projects</Link>
                <Link to="/my_portfolio/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;