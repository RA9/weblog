import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'

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
          className="navbar-item"
          href="https://github.com/Ra9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      <a href="https://twitter.com/carlosnah8" class="button is-primary">
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      </p>
      </div>
    </div>
  </nav>
)

export default Navbar
