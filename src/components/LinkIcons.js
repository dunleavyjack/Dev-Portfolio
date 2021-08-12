import React from 'react';
import github from '../images/github-logo-green.png';
import medium from '../images/medium-logo-green.png';
import linkedin from '../images/linkedin-logo-green.png';

const LinkIcons = () => {
    return (
        <div className="link-component-icons">
            <img
                className="link-component-image"
                src={github}
                alt="github link"
            />
            <img
                className="link-component-image"
                src={medium}
                alt="medium link"
            />
            <img
                className="link-component-image"
                src={linkedin}
                alt="linkedin link"
            />
        </div>
    );
};

export default LinkIcons;
