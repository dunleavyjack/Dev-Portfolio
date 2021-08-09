import React from 'react';

const CodeBox = ({ image, imageHeight }) => {
    return (
        <div className="codebox-container" style={{ height: imageHeight }}>
            <img src={image} alt="code box" />
        </div>
    );
};

export default CodeBox;
