import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/Auth/Home/Home" className="link">
          <div className="headerItem">Home</div>
        </Link>
      </div>
      <div className="navbar-right">
        {/* <ul className="nav-links">
          <li>
            <Link to="/Auth/Login/Login" className="link">
              <div className="headerItem">Login</div>
            </Link>
          </li>
          <li>
            <Link to="/Auth/Signup/Signup" className="link">
              <div className="headerItem">Signup</div>
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
