// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/signup">Sign Up</Link>
    <Link to="/signin">Sign In</Link>
  </nav>
);

export default NavBar;
