import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: 'black',
    padding: '3px',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative', // Added position relative
  };

  const hamburgerStyle = {
    cursor: 'pointer',
    fontSize: '27px',
    marginRight: '10px',
    zIndex: 1, // Ensure the hamburger is above other elements
    transition: 'transform 0.3s ease-in-out', // Add transition for rotation animation
    transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate when open
  };

  const sidebarOpenStyle = {
    width: '200px',
  };

  const linkContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    left: isMenuOpen ? '0' : '-200px',
    transition: 'left 0.6s ease-in-out',
    zIndex: 0, // Ensure the links container is behind other elements
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

  const todoListStyle = {
    marginRight: '1250px',
    zIndex: 1, // Ensure the TodoList is above other elements
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Align the search bar to the right
    marginRight: isMenuOpen ? '200px' : '5px', // Add margin-right only when the menu is open
    transition: 'margin-right 0.3s ease-in-out', // Added transition for smooth movement
  };
  
  const searchInputStyle = {
    marginRight: '-25px',
    padding: '5px',
  };

  const searchIconStyle = {
    fill: isMenuOpen ? 'black' : 'black', // Change icon color based on the menu state
    width: '25px',
    height: '25px',
    cursor: 'pointer',
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div style={navbarStyle}>
        <div style={{ ...hamburgerStyle, ...isMenuOpen && sidebarOpenStyle }} onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>

        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" style={linkStyle} onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" style={linkStyle} onClick={toggleMenu}>
            Contact Us
          </Link>
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
    </div>
  );
};

export default Navbar;
