import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    transition: 'transform 0.6s ease-in-out', // Slow-motion for rotation animation
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
    marginRight: '50px', // Space between hamburger menu and links
    display: 'block',
    position: 'absolute',
    top: '40px',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '5px', // Add border-radius for rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for depth
    transition: 'opacity 0.6s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out', // Add transitions for opacity, transform, background-color, and color
    opacity: isMenuOpen ? 1 : 0, // Show links when open, hide when closed
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)', // Lift links slightly when menu is closed
  };
  
  // Add hover effect
  linkStyle[':hover'] = {
    backgroundColor: '#333', // Darken background on hover
    color: 'white', // Change text color to white on hover
  };
  
  // ... (rest of the code)
  
  // In the component, use a library like styled-components or Emotion to handle pseudo-classes
  // Example with styled-components:
  
  
  const StyledLink = styled(Link)`
    ${linkStyle}
  `;
  
  // Then use StyledLink in your component instead of Link:
  // <StyledLink to="/" style={hamburgerIconStyle}>Home</StyledLink>
  // <StyledLink to="/about" style={hamburgerIconStyle}>About</StyledLink>
  // <StyledLink to="/contact" style={hamburgerIconStyle}>Contact Us</StyledLink>
  
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
