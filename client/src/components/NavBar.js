import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="dropdown">
        {/* <button className="dropbtn">Dropdown</button> */}
        <div className="dropdown-content">
          <a href="#"> Submit a question to be added to the list</a>
          <br></br>
          <a href="#"> B</a>
          <br></br>
          <a href="#"> C</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
