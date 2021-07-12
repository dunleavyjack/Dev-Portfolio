import React from 'react';
import InfoHeader from '../components/InfoHeader';
import InfoDetail from '../components/InfoDetail';
import Links from '../components/Links';

const Overview = () => {
    return (
        <>
            <InfoHeader text="Developer, Designer" />
            <InfoDetail text="Building responsive, professional, and creative web applications using React, Redux, Figma, and Node.js. I am creative, efficient, and design-oriented. " />
            <Links />
        </>
    );
};

export default Overview;
