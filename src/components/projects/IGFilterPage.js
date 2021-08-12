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
                <h1 className="project-about">About 🏪</h1>
                <p className="project-description">...</p>
                <StaticProjectImage image={filter1} />
            </div>
        </div>
    );
};

export default IGFilterPage;
