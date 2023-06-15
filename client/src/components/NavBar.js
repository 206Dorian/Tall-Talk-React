import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="dropdown">
        {/* <button className="dropbtn">Dropdown</button> */}
        <div className="dropdown-content">
          <a href="#"> A</a>
          <a href="#"> B</a>
          <a href="#"> C</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
