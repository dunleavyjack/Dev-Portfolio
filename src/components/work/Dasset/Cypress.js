import React from 'react';
import IndividualProjectHeader from '../../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import StaticProjectImage from '../../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import NavSpacer from '../../NavSpacer';
import cypress1 from '../../../images/workImages/cypress-mockup-1.png';
import TextSpacer from '../../TextSpacer';
import SeeMoreWork from '../../../components/SeeMoreWork';

const Cypress = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="Cypress Testing"
                    text="Automated UI testing for user authentication, cryptocurrency trading, and general upkeep."
                />
                <h1 className="project-about">About</h1>
                <p className="project-description">
                    My second large project at Dasset was to create an automated
                    testing suite using{' '}
                    <span
                        className="project-text-link"
                        href="https://www.cypress.io/"
                    >
                        Cypress
                    </span>
                    , a popular end-to-end testing framework.
                </p>
                <StaticProjectImage image={cypress1} />
                <p className="project-description">
                    The goal was to accelerate UI testing, so I wrote different
                    tests for user authentication, the ability to actively trade
                    different cryptocurrencies, in addition to various other
                    actions across the site.
                </p>

                <TextSpacer />
                <h1 className="project-about">Overall 📝</h1>
                <p className="project-description">
                    I've been using Cypress to test my personal projects for a
                    while now and this was great opportunity to use that skill
                    in a professional setting.
                    <br />
                    <br />
                    In the future, I would like to get more familiar with
                    additional testing frameworks (like Jest) as well.
                </p>
                <SeeMoreWork />
            </div>
        </div>
    );
};

export default Cypress;
