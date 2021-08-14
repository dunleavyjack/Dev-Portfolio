import React from 'react';

const TakeALook = ({ githubLink, mediumLink, mediumText }) => {
    return (
        <div className="static-project-spacing">
            <h1 className="project-about">See More 🔎</h1>
            <ul className="project-link-list-container">
                <li>
                    <a className="project-link-list" href={githubLink}>
                        Full code on GitHub
                    </a>
                </li>
                <li>
                    <a className="project-link-list" href={mediumLink}>
                        {mediumText}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default TakeALook;
