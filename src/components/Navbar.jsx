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
  };

  const hamburgerStyle = {
    cursor: 'pointer',
    fontSize: '27px',
    marginRight: '10px',
    zIndex: 1,
    transition: 'transform 0.3s ease-in-out', // Changed the transition property
    transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    transformOrigin: 'center', // Added transform origin to rotate at the center
  };

  const sidebarOpenStyle = {
    width: '200px',
  };

  const todoListStyle = {
    marginRight: '1200px',
    zIndex: 1,
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

 

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    padding: '3px',
  };

  const searchIconStyle = {
    fill: isMenuOpen ? 'black' : 'white',
    width: '20px',
    height: '25px',
    cursor: 'pointer',
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

          <div style={searchContainerStyle}>
            <input type="text" placeholder="Search" style={searchInputStyle} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={searchIconStyle}>
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25L20.71 18l-4.25-4.25zM8 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
            </svg>
          </div>
        </div>
      </div>

      <div style={linkContainerStyle}>
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
