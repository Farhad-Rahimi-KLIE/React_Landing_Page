import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">{props.home}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">{props.about}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/services">{props.services}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">{props.contact}</Link>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar
