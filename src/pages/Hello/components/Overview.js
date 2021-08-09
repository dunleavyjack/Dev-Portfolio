import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import InfoDetail from '../../../components/InfoDetail';
import Links from '../../../components/Links';

const Overview = () => {
    const links = [
        {
            label: 'GITHUB',
            ref: 'https://github.com/dunleavyjack',
        },
        {
            label: 'MEDIUM',
            ref: 'https://jackdunleavy.medium.com',
        },
        {
            label: 'LINKEDIN',
            ref: 'https://www.linkedin.com/in/jack-dunleavy-0b177b83/',
        },
    ];

    return (
        <>
            <InfoHeader text="Developer, Designer" />
            <InfoDetail text="Building responsive, professional, and creative web applications using React, Redux, Figma, and Node.js. Creative, efficient, and design-oriented. " />
            <Links data={links} />
        </>
    );
};

export default Overview;
