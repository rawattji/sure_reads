import React from 'react';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../Assests/logo.png';

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload(); // Reload the page when logo is clicked
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#" onClick={handleLogoClick}>
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className="social-media">
        <a href="https://github.com/rawattji" aria-label="Github">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/amanrawatmait/" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/amanhikyun/" aria-label="Instagram">
          <AiFillInstagram />
        </a>
      </nav>
    </header>
  );
};

export default Header;
