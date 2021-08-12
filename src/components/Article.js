import React from 'react';

const Article = ({ title, sub, description, link }) => {
    return (
        <div className="job-container">
            <a className="job-link" href={link}>
                <p className="job-title black">{title.toUpperCase()}</p>
            </a>

            <p className="job-description">{sub}</p>
            <p className="job-description">
                <span className="green">{description}</span>
            </p>
        </div>
    );
};

export default Article;
