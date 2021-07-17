import React from 'react';
import NameHeader from '../components/NameHeader';
import Overview from '../components/Overview';
import PersonalProjects from '../components/PersonalProjects';

const HomePage = () => {
    return (
        <div className="page-container">
            <NameHeader />
            <Overview />
            <PersonalProjects />
        </div>
    );
};

export default HomePage;
