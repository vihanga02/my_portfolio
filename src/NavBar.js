import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/360_F_353903472_pXZ24g7X9HHyZOAdOsHGARXhOuhns1DX.jpg?raw=true" alt="VM" className="logo" />
      <div className="links">
        <Link to="home" smooth duration={500}>HOME</Link>
        <Link to="about" smooth duration={500}>ABOUT</Link>
        <Link to="projects" smooth duration={500}>PROJECTS</Link>
        <Link to="contact" smooth duration={500}>CONTACT</Link>
      </div>
    </nav>
  );
}

export default NavBar;
