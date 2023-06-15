import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#"> Add </a>
          <a href="#"> Befriend</a>
          <a href="#"> Comment or like</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
