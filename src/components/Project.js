import React from 'react';

const Project = ({ title, date, imgSrc, altText }) => {
    return (
        <div>
            <h1 className="project-text">
                {title} | {date}
            </h1>
            <img className="project-image" src={imgSrc} alt={altText}></img>
        </div>
    );
};

export default Project;
