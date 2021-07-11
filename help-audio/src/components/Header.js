import '../App.css';
import {Link} from 'react-router-dom';
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/hamburger.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "../css/header.css";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="app">
      <div className="header">
        <div className="logo-nav">
          <ul className={click ? "nav-options active" : "nav-options"}>
          <Link to='/'>
            <li className="option" onClick={closeMobileMenu}>
              HOME
            </li>
            </Link>
            <Link to='/components/about'>
            <li className="option" onClick={closeMobileMenu}>
              ABOUT
            </li>
            </Link>
            <Link to='/components/recordings'>
            <li className="option" onClick={closeMobileMenu}>
              RECORDINGS
            </li>
            </Link>
            <Link to='/components/contacts'>
            <li className="option" onClick={closeMobileMenu}>
              CONTACT
            </li>
            </Link>
            <Link to='/components/settings'>
            <li className="option" onClick={closeMobileMenu}>
              SETTINGS
            </li>
            </Link>
            <Link to='/components/dashboard'>
            <li className="option" onClick={closeMobileMenu}>
              PROFILE
            </li>
            </Link>
  
          </ul>
        </div>
        
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
      </div>
    );
  };
  
  export default Header;
  
  