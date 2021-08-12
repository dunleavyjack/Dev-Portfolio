import React from 'react';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import NavSpacer from '../NavSpacer';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import ctcovid from '../../images/projectImages/CovidCT/ctcovid-mockup-1.png';

const CTCovidDaily = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="CT COVID DAILY"
                    text="Real-time COVID-19 data tracker displaying daily totals, testing, and more."
                    linkText="View on GitHub"
                    link="https://github.com/dunleavyjack/CT-COVID-Data-App"
                />
                <h1 className="project-about">About 👨‍⚕️</h1>
                <p className="project-description">
                    <span className="black">
                        This project was a collaboration with UX and industrial
                        designer{' '}
                        <a
                            className="project-text-link"
                            href="https://jhyoon.work"
                        >
                            Jeonghye Yoon
                        </a>
                        , who excellently designed the app's logo, icon, and
                        overall layout.
                    </span>
                    <br />
                    <br />
                    Like a lot of people, when the pandemic firrst hit I spent a
                    lot of time checking the current cases and rate of tests for
                    my area.
                </p>
                <StaticProjectImage image={ctcovid} />
                <h1 className="project-about">The Tech 👨🏼‍💻</h1>
                <ul className="project-tech">
                    <li>
                        <span className="green">
                            iOS Development with Swift
                        </span>
                    </li>
                    <li>
                        <span className="green">XCode Auto Layout</span>
                    </li>
                    <li>
                        <span className="green">
                            State of Connecticut Covid Data API
                        </span>
                    </li>
                    <li>
                        <span className="green">Swift URLRequest</span> (for
                        handeling API requests)
                    </li>
                    <li>
                        <span className="green">Git</span>
                    </li>
                    <li>
                        <span className="green">Figma</span> (converting design
                        to UI)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CTCovidDaily;
