import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="Home">Home</a>
            </div>
            <div className="navbar-left">
              <ul className="nav-links">
                <li>
                  <a href="/products">Login</a>
                </li>
                <li>
                  <a href="/about">Signup</a>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar