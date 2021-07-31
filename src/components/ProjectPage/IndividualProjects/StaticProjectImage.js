import React from 'react';

const StaticProjectImage = ({ image }) => {
    return (
        <div className="static-project-image-container">
            <img className="static-project-image" src={image} />
        </div>
    );
};

export default StaticProjectImage;
