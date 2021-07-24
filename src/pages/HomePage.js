import React from 'react';
import Overview from '../components/Overview';
import PersonalProjects from '../components/PersonalProjects';
import AnimatedNameHeader from '../components/AnimatedNameHeader';
import Experience from '../components/Experience';
import SeeMore from '../components/SeeMore';

const HomePage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <AnimatedNameHeader />
                <Overview />
                <PersonalProjects />
                {/* <Experience /> */}
                <SeeMore />
            </div>
        </div>
    );
};

export default HomePage;
