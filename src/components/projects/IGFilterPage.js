import React from 'react';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import NavSpacer from '../NavSpacer';
import filter1 from '../../images/projectImages/Filter/filter-mockup-1.png';

const IGFilterPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="Instagram Quiz Filter"
                    text="A Javascript built AR Instagram Filter. Which Korean convenience store are you?"
                />
                <h1 className="project-about">About 🤳</h1>
                <p className="project-description">
                    Using{' '}
                    <a
                        href="https://sparkar.facebook.com/ar-studio/"
                        className="project-text-link"
                    >
                        Spark AR Studio
                    </a>{' '}
                    (Instagram and Facebook's augmented reality software), I
                    recently learned that filters could be made for both
                    applications using JavaScript and I decided to make my own.
                    <br />
                    <br />
                    Although convenience stores are commonplace in South Korea
                    and a few large companies dominate the market. Whether it's
                    GS25, CU, EMART24, or even MiniStop—each brand is a bit
                    different.
                </p>
                <StaticProjectImage image={filter1} />
            </div>
        </div>
    );
};

export default IGFilterPage;
