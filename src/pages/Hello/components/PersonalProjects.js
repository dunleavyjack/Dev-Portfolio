import React from 'react';
import Project from '../../../components/Project';
import moodring1 from '../../../images/projectImages/MoodRing/moodring-mockup-1.png';
import Links from '../../Contact/components/ContactLinks';
import TextSpacer from '../../../components/TextSpacer';
import sclub1 from '../../../images/projectImages/SseuregiClub/seuclub-mockup-1.png';
import veryfar1 from '../../../images/projectImages/VeryVeryFar/veryfar-mockup-1.png';
// import LinkIcons from '../../../components/LinkIcons';

const PersonalProjects = () => {
    const links = [
        {
            label: 'GITHUB',
            ref: 'https://github.com/dunleavyjack',
        },
        {
            label: 'LINKEDIN',
            ref: 'https://www.linkedin.com/in/jackdunleavy/',
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
            {/* <LinkIcons /> */}
            <TextSpacer />
            {/* <InfoHeader text={'Featured Projects'} link={'projects'} /> */}
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub1}
                altText={'project 2'}
                link="sseuregiclub"
                description="A public recyling and trash bin finder."
            />

            <TextSpacer />
            <Project
                title={'Spotify Mood Ring'}
                date={'March 2021'}
                imgSrc={moodring1}
                altText={'project 1'}
                link={'moodring'}
                description={
                    'A mood detector based on your recently played music.'
                }
            />

            <TextSpacer />
            <Project
                title={'Very, Very Far'}
                date={'February 2021'}
                imgSrc={veryfar1}
                altText={'project 3'}
                link={'veryveryfar'}
                description="Your running, cycling, and swimming totals uniquely summed up."
            />
        </>
    );
};

export default PersonalProjects;
