import React from 'react';

const ProjectPageLinks = ({ rowOne, rowTwo }) => {
    const firstRow = rowOne.map((link) => {
        return <a href={link.ref}>{link.label}</a>;
    });

    const secondRow = rowTwo.map((link) => {
        return <a href={link.ref}>{link.label}</a>;
    });

    return (
        <>
            <div className="static-links-container">{firstRow}</div>
            <div className="static-links-container">{secondRow}</div>
        </>
    );
};

export default ProjectPageLinks;
