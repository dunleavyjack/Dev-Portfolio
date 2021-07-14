import React from 'react';

const Project = ({ title, date, description, imgSrc, altText }) => {
    return (
        <div>
            <h1 className="project-text">
                {title} | {date}
            </h1>
            <p className={'project-description'}>{description}</p>
            <div className={'project-image-container'}>
                <img className="project-image" src={imgSrc} alt={altText}></img>
                <div className={'project-image-text'}>SEE MORE</div>
            </div>
        </div>
    );
};

export default Project;
