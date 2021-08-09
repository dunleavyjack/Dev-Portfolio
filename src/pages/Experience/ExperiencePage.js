import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import ExperiencePageTitle from './components/ExperiencePageTitle';
import AllExperience from './components/AllExperience';

const ExperiencePage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <ExperiencePageTitle />
                <AllExperience />
            </div>
        </div>
    );
};

export default ExperiencePage;
