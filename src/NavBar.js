import {Link} from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/360_F_353903472_pXZ24g7X9HHyZOAdOsHGARXhOuhns1DX.jpg?raw=true" alt="VM" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About Me</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;