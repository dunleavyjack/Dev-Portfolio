import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Project from '../../../components/Project';
import Spacer from '../../../components/Spacer';
import dasset1 from '../../../images/workImages/dasset-mockup-1.png';
import cypress1 from '../../../images/workImages/cypress-mockup-1.png';
import planlogic1 from '../../../images/workImages/planlogic-mockup-1.png';

const AllExperience = () => {
    return (
        <>
            <InfoHeader
                text={'DASSET | Junior React Developer'}
                link={'projects'}
                id={'react'}
            />
            <Project
                title={'Cryptocurrency Product Pages'}
                date={'July 2021'}
                imgSrc={dasset1}
                alttext={'project 2'}
                description="Real time cryptocurrency data tracking, buying and selling, API integration, and responsive design."
                link="dassetpages"
            />
            <Project
                title={'Automated UI Testing With Cypress'}
                date={'August 2021'}
                imgSrc={cypress1}
                alttext={'project 2'}
                description="A custom test suite for user authentication, trading, and general upkeep of the site."
                link="dassettesting"
            />

            <Spacer />
            <InfoHeader
                text={'PLANLOGIC | JavaScript Developer'}
                link={'projects'}
                id={'react'}
            />
            <Project
                title={'Insurance Calculation Algorithms'}
                date={'April 2021'}
                imgSrc={planlogic1}
                description="Pseudocode conversions into clean, reusable ES6 JavaScript."
                alttext={'project 2'}
                link="planlogic"
            />
            <Spacer />
        </>
    );
};

export default AllExperience;
