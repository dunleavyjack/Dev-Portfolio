import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Skill from './Skill';
import reactLogo from '../../../images/techImages/reactLogo.png';
import reduxLogo from '../../../images/techImages/reduxLogo.png';
import javascriptLogo from '../../../images/techImages/javascriptLogo.png';
import figmaLogo from '../../../images/techImages/figmaLogo.png';
import materialLogo from '../../../images/techImages/materialLogo.png';
import cypressLogo from '../../../images/techImages/cypressLogo.png';
import bootstrapLogo from '../../../images/techImages/bootstrapLogo.png';
import htmlcssLogo from '../../../images/techImages/htmlcssLogo.png';

const mySkills = [
    {
        name: 'React',
        imgSrc: reactLogo,
        text: 'Custom hooks, React Router, API integration, with modern and functional components.',
    },
    {
        name: 'JavaScript',
        imgSrc: javascriptLogo,
        text: 'Clear, concise, and expressive ES6 Javascript.',
    },
    {
        name: 'HTML & CSS',
        imgSrc: htmlcssLogo,
        widePic: 'yes',
        text: 'Custom hooks, React Router, API integration, with modern and functional components.',
    },
    {
        name: 'Redux',
        imgSrc: reduxLogo,
        text: 'Effective State management with useful and well defined actions and reducers.',
    },
    {
        name: 'Figma',
        imgSrc: figmaLogo,
        text: 'Custom hooks, React Router, API integration, with modern and functional components.',
    },
    {
        name: 'Cypress',
        imgSrc: cypressLogo,
        text: 'Custom hooks, React Router, API integration, with modern and functional components.',
    },
    {
        name: 'Material UI',
        imgSrc: materialLogo,
        text: 'Custom hooks, React Router, API integration, with modern and functional components.',
    },
    {
        name: 'BootStrap',
        imgSrc: bootstrapLogo,
        text: 'Custom hooks, React Router, API integration, with modern and functional components.',
    },
];

const skillList = mySkills.map((skill) => {
    return <Skill name={skill.name} imgSrc={skill.imgSrc} text={skill.text} />;
});

const Skills = () => {
    return (
        <>
            <InfoHeader text="Skills" />
            <div className="skills-container">{skillList}</div>
        </>
    );
};

export default Skills;
