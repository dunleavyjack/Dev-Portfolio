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
        text: 'Custom hooks, React-Router, API integration, with modern and functional components.',
    },
    {
        name: 'JavaScript',
        imgSrc: javascriptLogo,
        text: 'Clear, concise, and expressive ES6 Javascript for faster and efficient production.',
    },
    {
        name: 'HTML & CSS',
        imgSrc: htmlcssLogo,
        widePic: 'yes',
        text: 'Semantic HTML5, Flexbox, and the Grid system for elite, modern design and development.',
    },
    {
        name: 'Redux',
        imgSrc: reduxLogo,
        text: 'Effective global state management with useful and well defined actions and reducers.',
    },
    {
        name: 'Figma',
        imgSrc: figmaLogo,
        text: 'Pixel perfect and responsive design for blueprints and mock-ups',
    },
    {
        name: 'Cypress',
        imgSrc: cypressLogo,
        text: 'Modern end-to-end UI testing to keep everything running smoothly',
    },
    {
        name: 'Material UI',
        imgSrc: materialLogo,
        text: 'A firm grasp of their design system to speed up professional work and jump into any project.',
    },
    {
        name: 'BootStrap',
        imgSrc: bootstrapLogo,
        text: 'BootStrap 4 and BootStrap 5 for accelerating CSS design.',
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
