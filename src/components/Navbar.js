import React from 'react';
import Chevron from '../images/chevron-arrow-down.png';

const Navbar = () => {
    return (
        <div className="navbar" id="customNav">
            <a href="/" className="active">
                HELLO
            </a>
            <a href="#projects">PROJECTS</a>
            <a href="#writing">WRITING</a>
            <a href="/contact">CONTACT</a>
            <img className="chevron-down" src={Chevron} alt="Down Arrow"></img>
        </div>
    );
};

export default Navbar;
