import React from 'react';
import Project from '../../../components/Project';
import sclub from '../../../images/projectImages/sclub-mockup-1.png';
import veryveryfar from '../../../images/projectImages/veryveryfar.png';
import moodring1 from '../../../images/projectImages/MoodRing/moodring-mockup-1.png';
import Links from '../../Contact/components/ContactLinks';
import TextSpacer from '../../../components/TextSpacer';

const PersonalProjects = () => {
    const links = [
        {
            label: 'GITHUB',
            ref: 'https://github.com/dunleavyjack',
        },
        {
            label: 'LINKEDIN',
            ref: 'https://www.linkedin.com/in/jack-dunleavy-0b177b83/',
        },
        {
            label: 'MEDIUM',
            ref: 'https://jackdunleavy.medium.com',
        },
    ];

    return (
        <>
            <TextSpacer />
            <Links data={links} />
            <TextSpacer />
            {/* <InfoHeader text={'Featured Projects'} link={'projects'} /> */}
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
                imgSrc={moodring1}
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
