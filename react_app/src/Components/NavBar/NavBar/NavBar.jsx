import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className='nav-menu'>
        <li>Home</li>
        <li>about me</li>
        <li>Projects</li>
        <li>Milestones</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>

      <div className="Connect">Connect</div>
    </div>
  )
}

export default NavBar;
