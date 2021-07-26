import React from 'react';

const InfoHeader = ({ text, link, id }) => {
    return (
        <>
            <div id={id} style={{ position: 'relative', top: '-65px' }}></div>
            <div>
                <h1 className="info-header" id={link}>
                    {text.toUpperCase()}
                </h1>
            </div>
        </>
    );
};

export default InfoHeader;
