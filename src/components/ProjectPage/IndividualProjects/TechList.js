import React from 'react';

const TechList = ({ tech }) => {
    const list = tech.map((e) => {
        return <li>{e}</li>;
    });

    return (
        <>
            <h1 className="project-about">BUILT WITH</h1>
            <ul className="project-tech">{list}</ul>
        </>
    );
};

export default TechList;
