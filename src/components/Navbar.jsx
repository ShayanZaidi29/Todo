import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: 'black',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    height: '60px',
    width: '1600px'
  };

  const hamburgerStyle = {
    cursor: 'pointer',
    fontSize: '27px',
    marginRight: '10px',
    zIndex: 1,
    transition: 'transform 0.3s ease-in-out', 
    transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    transformOrigin: 'center',
  };

  const sidebarOpenStyle = {
    width: '200px',
    backgroundColor: '#222', // Added background color
    transition: 'background-color 0.3s ease-in-out', // Added color change animation
  };

  const todoListStyle = {
    marginRight: '1550px', // Adjusted the margin
    zIndex: 1,
    height: '25px'
  };

  const linkContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    left: isMenuOpen ? '0' : '-200px',
    transition: 'left 0.6s ease-in-out',
    zIndex: 0,
    backgroundColor: 'black',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  };

  linkStyle[':hover'] = {
    backgroundColor: '#333',
    color: 'white',
  };

  const contentContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div style={navbarStyle}>
        <div style={hamburgerStyle} onClick={toggleMenu}>
          &#9776;
        </div>

        <div style={contentContainerStyle}>
          <div style={todoListStyle}>
            <p>TodoList</p>
          </div>
        </div>
      </div>

      <div style={isMenuOpen ? { ...linkContainerStyle, ...sidebarOpenStyle } : linkContainerStyle}>
        <Link to="/Home" style={linkStyle} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/Footer" style={linkStyle} onClick={toggleMenu}>
          About
        </Link>
        <ScrollLink to="footer" spy={true} smooth={true} duration={500} style={linkStyle} onClick={toggleMenu}>
          Contact Us
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
