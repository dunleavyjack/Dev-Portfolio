import React from 'react';

const Article = ({ title, description, link }) => {
    return (
        <div className="job-container">
            <a className="job-link" href={link}>
                <p className="job-title">{title.toUpperCase()}</p>
            </a>
            <p className="job-description">{description}</p>
        </div>
    );
};

export default Article;
