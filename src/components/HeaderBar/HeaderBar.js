import React from 'react';
import './HeaderBar.css';
import logo from '../../images/Hex-J-Logo.svg';

export const HeaderBar = () => {
  return(
    <div className='header-bar'>
      <img className='hex-j-logo' src={logo} alt="Hex J logo" />
      <div className='nav-bar-wrapper'>
        <nav className='nav-bar'>
          <a className='nav-bar-links' href=''>HOME</a>
          <a className='nav-bar-links' href=''>ABOUT ME</a>
          <a className='nav-bar-links' href=''>SKILLS</a>
          <a className='nav-bar-links' href=''>PORTFOLIO</a>
          <a className='nav-bar-links' href=''>CONTACT</a>
        </nav>
      </div>
    </div>
  )
}