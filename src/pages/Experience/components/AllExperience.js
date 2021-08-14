import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Project from '../../../components/Project';
import Spacer from '../../../components/Spacer';
import dasset1 from '../../../images/workImages/dasset-mockup-1.png';
import cypress1 from '../../../images/workImages/cypress-mockup-1.png';
import planlogic1 from '../../../images/workImages/planlogic-mockup-1.png';
import TextSpacer from '../../../components/TextSpacer';

const AllExperience = () => {
    return (
        <>
            <InfoHeader
                text={'DASSET Digital Asset Exchange Ltd.'}
                link={'projects'}
                id={'react'}
            />
            <Project
                title={'Cryptocurrency Product Pages'}
                date={'July 2021'}
                imgSrc={dasset1}
                alttext={'project 2'}
                description="Real time crypto data tracking, trading, and information."
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

            <TextSpacer />
            <h1 className="project-about">The Tech 👨🏼‍💻</h1>
            <ul className="project-tech">
                <li>
                    <span className="green">JavaScript</span>
                </li>
                <li>
                    <span className="green">jQuery</span>
                </li>
                <li>
                    <span className="green">The Fetch API</span> (For handeling
                    API requests)
                </li>
                <li>
                    <span className="green">The OMDb API</span> (For finding
                    movie data)
                </li>
            </ul>

            <Spacer />
            <InfoHeader text={'PlanLogic'} link={'projects'} id={'react'} />
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
