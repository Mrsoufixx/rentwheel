import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
      <header className="header">
      <div id="menu-btn" className="fas fa-bars"></div>

      <NavLink className="logo" to="/">
        {" "}
        <span>Bike</span>Book{" "}
      </NavLink>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/exploreRentBikes">Bike Showcase</NavLink>
      </nav>

      <div id="login-btn">
        <button className="btn">
          <NavLink className="nav-link" to="/signin">
            login
          </NavLink>
        </button>
      </div>
    </header>
  )
}

export default Navbar