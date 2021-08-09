import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Project from '../../../components/Project';
import moodring from '../../../images/projectImages/moodringHR.png';
import sclub from '../../../images/projectImages/sseuregiclubHR.png';
import veryveryfar from '../../../images/projectImages/veryveryfar.png';

const PersonalProjects = () => {
    return (
        <>
            <InfoHeader text={'Featured Projects'} link={'projects'} />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                altText={'project 2'}
                link="sseuregiclub"
            />
            <Project
                title={'Spotify Mood Ring'}
                date={'March 2021'}
                imgSrc={moodring}
                altText={'project 1'}
                link={'moodring'}
            />
            <Project
                title={'Very Very Far'}
                date={'February 2021'}
                imgSrc={veryveryfar}
                altText={'project 3'}
                link={'veryveryfar'}
            />
        </>
    );
};

export default PersonalProjects;
