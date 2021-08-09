import React from 'react';

const Links = ({ data }) => {
    const links = data.map((link) => {
        return <a href={link.ref}>{link.label}</a>;
    });

    return <div className="contact-links-container">{links}</div>;
};

export default Links;
