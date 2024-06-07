import {Link} from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <h1>Vihanga Muthuamala</h1>
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