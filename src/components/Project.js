import React from 'react';

const Project = ({ title, date, imgSrc, altText, link }) => {
    const handleClick = () => {
        window.location = link;
    };

    return (
        <>
            <h1 className="project-text-mobile">
                {title} | {date}
            </h1>
            <div className={'project-image-container'}>
                <img
                    className="project-image"
                    src={imgSrc}
                    alt={altText}
                    onClick={() => handleClick()}
                ></img>
                <div
                    className={'project-image-text'}
                    onClick={() => handleClick()}
                >
                    <h1 className="project-text">
                        {title} | {date}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Project;
