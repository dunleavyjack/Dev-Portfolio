import React, { useState } from 'react';
import github from '../assets/images/github.png';
import logo from '../assets/images/namelogo.png';
import dots from '../images/dots.png';
import Drawer from './Drawer';

const Navbar = () => {
    const [atTop, setAtTop] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);

    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setAtTop(false);
        } else {
            setAtTop(true);
        }
    });

    const toggleActive = (page) => {
        return window.location.pathname === page ? 'active' : '';
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        console.log(drawerOpen);
    };

    return (
        <>
            <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            <nav className={`navbar ${atTop ? null : 'floating'}`}>
                <div className="logo">
                    <a href="/">
                        <img
                            src={logo}
                            alt="Name Logo"
                            height={'50px'}
                            width={'83px'}
                        ></img>
                    </a>
                </div>
                <div className="navlinks" id="customNav">
                    <a href="/" className={toggleActive('/')}>
                        HELLO
                    </a>
                    <a href="/projects" className={toggleActive('/projects')}>
                        PROJECTS
                    </a>
                    <a
                        href="/experience"
                        className={toggleActive('/experience')}
                    >
                        EXPERIENCE
                    </a>
                    <a href="/contact" className={toggleActive('/contact')}>
                        CONTACT
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/dunleavyjack">
                        <img
                            src={github}
                            alt="Github Link Icon"
                            height={30}
                            width={30}
                        />
                    </a>
                </div>
                <div className="burger" onClick={() => toggleDrawer()}>
                    <img src={dots} alt="hamburger menu"></img>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
