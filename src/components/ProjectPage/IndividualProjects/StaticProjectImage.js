import React from 'react';

const StaticProjectImage = ({ image }) => {
    return (
        <div className="static-project-image-container">
            <img
                className="static-project-image"
                src={image}
                alt="Project Mockup"
            />
        </div>
    );
};

export default StaticProjectImage;
