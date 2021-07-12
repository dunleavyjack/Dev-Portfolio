import React from 'react';

const InfoHeader = ({ text }) => {
    return (
        <div>
            <h1 className="info-header">{text.toUpperCase()}</h1>
        </div>
    );
};

export default InfoHeader;
