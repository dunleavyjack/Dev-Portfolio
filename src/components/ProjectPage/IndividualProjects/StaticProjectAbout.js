import React from 'react';

const StaticProjectAbout = ({ text }) => {
    return (
        <div>
            <h1 className="project-about">ABOUT</h1>
            {text}
        </div>
    );
};

export default StaticProjectAbout;
