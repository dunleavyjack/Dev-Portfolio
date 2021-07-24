import React from 'react';
import InfoHeader from './InfoHeader';
import Project from './Project';
import moodring from '../images/projectImages/moodringHR.png';
import sclub from '../images/projectImages/sseuregiclubHR.png';
import veryveryfar from '../images/projectImages/veryveryfar.png';

const PersonalProjects = () => {
    return (
        <>
            <InfoHeader text={'Recent Projects'} link={'projects'} />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
            />
            <Project
                title={'Spotify Mood Ring'}
                date={'March 2021'}
                description={
                    "A mobile-first React web app that determines a user's mood based on their recently played music on Spotify."
                }
                imgSrc={moodring}
                alttext={'project 1'}
            />
            <Project
                title={'Very Very Far'}
                date={'February 2021'}
                imgSrc={veryveryfar}
                alttext={'project 3'}
            />
        </>
    );
};

export default PersonalProjects;
