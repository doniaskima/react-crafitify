import React from 'react';
import PropTypes from 'prop-types';
import  './NavBar.css';

const Navbar = ({ children }) => {
  return (
    <div className="navbar">
      {children}
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
