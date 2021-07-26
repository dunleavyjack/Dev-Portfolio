import React from 'react';

const Project = ({ title, date, imgSrc, altText, history }) => {
    return (
        <div className={'project-image-container'}>
            <img className="project-image" src={imgSrc} alt={altText}></img>
            <div className={'project-image-text'}>
                <h1 className="project-text">
                    {title} | {date}
                </h1>
            </div>
        </div>
    );
};

export default Project;
