import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Project from '../../../components/Project';
import sclub from '../../../images/projectImages/sseuregiclubHR.png';
import veryveryfar from '../../../images/projectImages/veryveryfar.png';
import Spacer from '../../../components/Spacer';
import ctcovid from '../../../images/projectImages/CovidCT/ctcovid-mockup-1.png';
import moodring1 from '../../../images/projectImages/MoodRing/moodring-mockup-1.png';

const AllProjects = () => {
    return (
        <>
            <InfoHeader
                text={'REACT WEB APPS'}
                link={'projects'}
                id={'react'}
            />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="sseuregiclub"
            />
            <Project
                title={'Spotify Mood Ring'}
                date={'March 2021'}
                description={
                    "A mobile-first React web app that determines a user's mood based on their recently played music on Spotify."
                }
                imgSrc={moodring1}
                alttext={'project 1'}
                link="moodring"
            />
            <Project
                title={'Very Very Far'}
                date={'February 2021'}
                imgSrc={veryveryfar}
                alttext={'project 3'}
                link="veryveryfar"
            />

            <Spacer />
            <InfoHeader text={'iOS'} link={'projects'} id="ios" />
            <Project
                title={'CT Covid Daily'}
                date={'January 2021'}
                imgSrc={ctcovid}
                alttext={'ct covid daily'}
                link="coviddaily"
            />

            <Spacer />
            <InfoHeader
                text={'CHROME EXTENSIONS'}
                link={'projects'}
                id="chrome"
            />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="scoredog"
            />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="toptoptop"
            />

            <Spacer />
            <InfoHeader text={'AUGEMENTED REALITY'} link={'projects'} id="ar" />
            <Project
                title={'Spark AR Instagram Filter'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="igfilter"
            />

            <Spacer />
            <InfoHeader text={'PYTHON'} link={'projects'} id="python" />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="fourforten"
            />
            <Spacer />
        </>
    );
};

export default AllProjects;
