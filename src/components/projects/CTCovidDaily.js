import React from 'react';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import NavSpacer from '../NavSpacer';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import ctcovid from '../../images/projectImages/CovidCT/ctcovid-mockup-1.png';
import TextSpacer from '../TextSpacer';
import SeeMore from '../SeeMore';

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
                    This project was a collaboration with UX and industrial
                    designer{' '}
                    <a
                        className="project-text-link"
                        href="www.linkedin.com/in/jeonghye"
                    >
                        Jeonghye Yoon
                    </a>
                    , who excellently designed the app's layout, icon, and logo.
                </p>
                <StaticProjectImage image={ctcovid} />

                <p className="project-description">
                    Like a lot of people, when the pandemic first hit I spent a
                    lot of time checking the current cases for my area.
                    Routinely, I would look at the number of new cases, the
                    amount of tests being conducted, and the rising total cases.
                    <br />
                    <br />
                    Because I was checking so often, the process of opening the
                    government website and navigating to the daily cases was a
                    bit time consuming. I wondered if I could find a more
                    convienent way to display that information and I decided to
                    make an iOS application for that purpose. I no longer live
                    in Connecticut, but my parents do and when checking the
                    COVID numbers there I noticed the local governement had a
                    free, open API for COVID data. I figured that would be a
                    good place to start
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

                <TextSpacer />
                <h1 className="project-about">Challenges and Solutions 🚧</h1>
                <h1 className="project-sub-about">
                    Swift Programming Language
                </h1>
                <p className="project-description">
                    This project was my first independent project using Swift,
                    which, unlike Javascript, is a{' '}
                    <span className="black">
                        strongly typed programming language
                    </span>
                    . It took a little getting used to, but I quickly learned to
                    appreciate the time saving benefits of type declaration.
                    These days I've been learning TypeScript and I've found that
                    my time with Swift created a good foundation.
                </p>

                <TextSpacer />
                <h1 className="project-sub-about">Custom Date Functions</h1>
                <p className="project-description">
                    Connecticut's COVID data API offered a ton of data for total
                    cases, probable cases, and tests completed but they only
                    offered an <span className="black">overal total</span>. In
                    order to find the daily change, which was the concept of
                    this application, I had to request the data for the current
                    date as well as the previous day and then find the
                    difference between the two.
                    <br />
                    <br />
                    While these kinds of functions are familiar to me in
                    Javascript, it was a fun challenge to replicate them in a
                    different language. I definitely learned a lot from this
                    project.
                </p>
                <SeeMore />
            </div>
        </div>
    );
};

export default CTCovidDaily;
