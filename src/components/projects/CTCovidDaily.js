import React from 'react';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import NavSpacer from '../NavSpacer';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import ctcovid from '../../images/projectImages/CovidCT/ctcovid-mockup-1.png';
import TextSpacer from '../TextSpacer';

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
                    Like a lot of people, when the pandemic first hit I spent a
                    lot of time checking the current cases for my area.
                    Routinely, I would look at the number of new cases, the
                    amount of tests being conducted, and the rising total cases.
                </p>
                <StaticProjectImage image={ctcovid} />

                <p className="project-description">
                    Because I was checking so often, the process of opening the
                    government website and navigating to the daily cases was a
                    bit time consuming. I wondered if I could find a more
                    convienent way to display the information and I decided to
                    make an iOS application. I no longer live in Connecticut,
                    but my parents do and when checking the COVID numbers there
                    I noticed the local governement had an free, open API for
                    COVID data. I figured that would be a good place to start
                </p>

                <TextSpacer />
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
