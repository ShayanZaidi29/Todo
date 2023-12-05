import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router, make sure to import Link

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'black',
    padding: '10px',
    color: 'white',
    textAlign: 'left',
  };

  const linkStyle = {
    marginRight: '20px',  // Add some margin to create space between links
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
