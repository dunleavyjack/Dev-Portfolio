import React from 'react';

const IndividualProjectHeader = ({
    name,
    text,
    linkText,
    link,
    githubLink,
}) => {
    return (
        <div className="project-header">
            <h1 className="project-title">{name}</h1>
            <p className="project-description-brief">{text}</p>
            {/* <div className="project-description-links"> */}
            <a className="project-description-link" href={link}>
                {linkText}
            </a>
            {/* {githubLink ? (
                    <>
                        <p className="project-description-brief">|</p>
                        <a href="" className="project-description-link">
                            GitHub
                        </a>
                    </>
                ) : (
                    ''
                )}
            </div> */}
        </div>
    );
};

export default IndividualProjectHeader;
