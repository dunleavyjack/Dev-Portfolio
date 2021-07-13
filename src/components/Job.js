import React from 'react';

const Job = ({ title, description, duration, company, link }) => {
    return (
        <div className="job-container">
            <a className="job-link" href={link}>
                <p className="job-title">{title.toUpperCase()}</p>
            </a>
            <p className="job-description">
                {company} | {description} | {duration}
            </p>
        </div>
    );
};

export default Job;
