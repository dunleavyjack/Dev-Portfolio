import React from 'react';

const Project = ({ title, date, description, imgSrc, altText }) => {
    return (
        <div>
            <h1 className="project-text">
                {title} | {date}
            </h1>
            <p className={'project-description'}>{description}</p>
            <img className="project-image" src={imgSrc} alt={altText}></img>
        </div>
    );
};

export default Project;
