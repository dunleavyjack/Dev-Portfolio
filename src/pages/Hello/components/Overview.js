import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
// import Links from '../../../components/Links';

const Overview = () => {
    return (
        <>
            <InfoHeader text="Developer, Designer" />
            <p className="info-detail">
                Front-end developer building responsive, professional, and
                creative web applications using React, Redux, Figma, and
                Node.js. Always creative, efficient, and design-oriented.
            </p>
            {/* <p className="info-detail">
                Front-end developer building responsive, professional, and
                creative web applications using{' '}
                <span className="green bold">React </span>,{' '}
                <span className="green bold">Redux </span>,{' '}
                <span className="green bold">Figma </span>, and{' '}
                <span className="green bold">Node.js</span>. Creative,
                efficient, and design-oriented.
            </p> */}
        </>
    );
};

export default Overview;
