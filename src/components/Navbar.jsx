import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: 'black',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const spaceDivStyle = {
    marginRight: '10px', // Reduce the space between "TodoList" and the hamburger menu
  };

  const hamburgerStyle = {
    cursor: 'pointer',
    fontSize: '24px',
    display: 'block',
    transition: 'transform 0.3s ease-in-out', // Add transition for rotation animation
    transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate when open
  };

  const hamburgerIconStyle = {
    display: 'block',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '30px', // Space between hamburger menu and links
    display: isMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '40px',
    backgroundColor: 'black',
    padding: '10px',
  };

  const todoListStyle = {
    marginRight: '1200px' 
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    marginRight: '10px',
    padding: '5px',
  };

  const searchIconStyle = {
    fill: 'white',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div style={navbarStyle}>
        <div style={linkContainerStyle}>
          <div style={hamburgerStyle} onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
          <div style={linkStyle}>
            <Link to="/" style={hamburgerIconStyle}>Home</Link>
            <Link to="/about" style={hamburgerIconStyle}>About</Link>
            <Link to="/contact" style={hamburgerIconStyle}>Contact Us</Link>
          </div>
        </div>

        <div style={spaceDivStyle}></div>

        <div style={todoListStyle}>
          <p>TodoList</p>
        </div>

        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search" style={searchInputStyle} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={searchIconStyle}>
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25L20.71 18l-4.25-4.25zM8 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
