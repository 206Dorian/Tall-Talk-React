import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      NavBar
      <div className="dropdown">
        <span>Menu</span>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
