import React from 'react';

const CircularProfilePic = ({ imgURL }) => {
    return (
        <div className="circular-portrait">
            <img src={imgURL} alt="jack" />
        </div>
    );
};

export default CircularProfilePic;
