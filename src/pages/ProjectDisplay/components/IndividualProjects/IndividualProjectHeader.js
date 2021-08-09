import React from 'react';

const IndividualProjectHeader = ({ name, text, linkText, link }) => {
    return (
        <div className="project-header">
            <h1 className="project-title">{name}</h1>
            <p className="project-description-brief">{text}</p>
            <a className="project-description-link" href={link}>
                {linkText}
            </a>
        </div>
    );
};

export default IndividualProjectHeader;
