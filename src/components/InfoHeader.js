import React from 'react';

const InfoHeader = ({ text, link, id }) => {
    return (
        <>
            <div id={id} className="info-header-spacing"></div>
            <div>
                <h1 className="project-info-header" id={link}>
                    {text.toUpperCase()}
                </h1>
            </div>
        </>
    );
};

export default InfoHeader;
