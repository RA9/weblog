import React from 'react'
import { Link } from 'gatsby'


const Navbar = () => (
  <nav className="navbar is-link" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
         Carlos's
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
      </div>
      <div className="navbar-end">
      <p className="buttons">
        <a
          className="button is-info"
          href="https://github.com/Ra9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
          <i className="fa fa-github"></i>
          </span>
          <span>Github</span>
        </a>
      <a href="https://twitter.com/carlosnah8" className="button is-primary">
        <span className="icon">
          <i className="fa fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      </p>
      </div>
    </div>
  </nav>
)

export default Navbar
