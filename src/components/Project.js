import React from 'react';

const Project = ({ title, date, imgSrc, altText, link, description }) => {
    const handleClick = () => {
        window.location = link;
    };

    return (
        <>
            <h1 className="project-text-mobile">
                {title} | {date}
            </h1>
            <p className="project-description-mobile">{description}</p>
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
                    <h1 className="project-text-title">{title}</h1>
                    <p className="project-text-description">{description}</p>
                    <p className="project-text-date">{date}</p>
                </div>
            </div>
            {/* <p className="project-description-mobile">{description}</p> */}
        </>
    );
};

export default Project;
