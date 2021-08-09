import React from 'react';

const TakeALook = ({ links }) => {
    const linkList = links.map((link) => {
        return (
            <li>
                <a className="project-link-list" href={link.url}>
                    {link.text}
                </a>
            </li>
        );
    });

    return (
        <div className="static-project-spacing">
            <h1 className="project-about">Want to See More?</h1>
            <ul className="project-link-list-container">{linkList}</ul>
        </div>
    );
};

export default TakeALook;
