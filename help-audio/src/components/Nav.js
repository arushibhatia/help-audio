import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar">
            <ul class="menu">
            <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/components/about'>
                <li>About</li>
                </Link>
                <Link to='/components/contacts'>
                <li>Contacts</li>
                </Link>
                <Link to='/components/recordings'>
                <li>Recordings</li>
                </Link>
                <Link to='/components/location'>
                <li>Location</li>
                </Link>
                <Link to='/components/settings'>
                <li>Settings</li>
                </Link>
                <Link to='/components/login'>
                <li>Login</li>
                </Link>
              
            </ul>
            
        </nav>
    );
}

export default Nav;