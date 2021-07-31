import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import IndividualProjectHeader from '../../components/ProjectPage/IndividualProjects/IndividualProjectHeader';
import moodring from '../../images/projectImages/moodringHR.png';
import StaticProjectImage from '../../components/ProjectPage/IndividualProjects/StaticProjectImage';
import StaticProjectAbout from '../../components/ProjectPage/IndividualProjects/StaticProjectAbout';
import TechList from '../../components/ProjectPage/IndividualProjects/TechList';
import SeeMore from '../../components/SeeMore';

const MoodRingPage = () => {
    const projectDescription = (
        <p className="project-description">
            This past February, I built Mood Ring. It examines a user’s recently
            played songs on Spotify using the Spotify API in order to guess that
            user’s mood.
            <br />
            <br />
            After sharing it with some friends and posting it online and I’m
            happy to say it has attracted over 3000 users from 15+ countries.
        </p>
    );

    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name={'MOOD RING'}
                    text={
                        'A mobile-first React web app that determines a user’s mood based on their recently played music on Spotify.'
                    }
                    linkText={'moodring.me'}
                    link={'https://moodring.vercel.app'}
                />
                <StaticProjectImage image={moodring} />
                <StaticProjectImage image={moodring} />
                <StaticProjectImage image={moodring} />
                <StaticProjectAbout text={projectDescription} />
                <TechList
                    tech={[
                        'React',
                        'React-Router',
                        'Redux',
                        'OAuth2 Flow',
                        'Spotify API',
                        'Git',
                        'Figma',
                        'Vercel Deployment',
                    ]}
                />
                <SeeMore />
            </div>
        </div>
    );
};

export default MoodRingPage;
