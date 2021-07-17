import React from 'react';

const InfoHeader = ({ text, link }) => {
    return (
        <div>
            <h1 className="info-header" id={link}>
                {text.toUpperCase()}
            </h1>
        </div>
    );
};

export default InfoHeader;
