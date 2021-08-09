import React from 'react';

const Skill = ({ name, imgSrc, widePic, text }) => {
    return (
        <div className="skills-box">
            <img className="tech-logo" alt={`${name}`} src={imgSrc}></img>
            <h1 className="skill-name">{name}</h1>
            <p className="skill-text">{text}</p>
        </div>
    );
};

export default Skill;
