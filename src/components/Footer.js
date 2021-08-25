import React from 'react';
import github from '../images/footerImages/github-bw-logo.png';
import medium from '../images/footerImages/medium-logo.png';
import linkedin from '../images/footerImages/linkedin-logo.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="icon-container">
                <a
                    className="footer-link"
                    href="https://github.com/dunleavyjack"
                >
                    <img
                        className="footer-image"
                        src={github}
                        alt="github icon"
                    />
                </a>
                <a
                    className="footer-link"
                    href="https://jackdunleavy.medium.com"
                >
                    <img
                        className="footer-image"
                        src={medium}
                        alt="medium icon"
                    />
                </a>
                <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/jackdunleavy/"
                >
                    <img
                        className="footer-image"
                        src={linkedin}
                        alt="linkedin logo"
                    />
                </a>
            </div>
            <h1 className="footer-text">dunleavyjack@gmail.com</h1>
            <h1 className="footer-email">Jack Dunleavy | 2021</h1>
        </div>
    );
};

export default Footer;
