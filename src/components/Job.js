import React from 'react';

const Job = ({ title, description, duration, company, link }) => {
    return (
        <div className="job-container">
            <p className="job-description">
                {duration} | {description}
            </p>
            <a className="job-link" href={link}>
                <p className="job-title">
                    {title.toUpperCase()}
                    <span className="job-company">
                        {' - '}
                        {company}
                    </span>
                </p>
            </a>
        </div>
    );
};

export default Job;
