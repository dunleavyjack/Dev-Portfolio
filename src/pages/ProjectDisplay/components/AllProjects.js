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
                description="A public recyling and trash bin finder."
            />

            <Spacer />
            <Project
                title={'Spotify Mood Ring'}
                date={'March 2021'}
                description={
                    'A mood detector based on your recently played music.'
                }
                imgSrc={moodring1}
                alttext={'project 1'}
                link="moodring"
            />

            <Spacer />
            <Project
                title={'Very Very Far'}
                date={'February 2021'}
                imgSrc={veryveryfar}
                alttext={'project 3'}
                link="veryveryfar"
                description="Your running, cycling, and swimming totals uniquely added up."
            />

            <Spacer />
            <InfoHeader text={'iOS'} link={'projects'} id="ios" />
            <Project
                title={'CT Covid Daily'}
                date={'January 2021'}
                imgSrc={ctcovid}
                alttext={'ct covid daily'}
                link="coviddaily"
                description="A COVID-19 data tracker for Connecticut"
            />

            <Spacer />
            <InfoHeader
                text={'CHROME EXTENSIONS'}
                link={'projects'}
                id="chrome"
            />
            <Project
                title={'Score Dog'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="scoredog"
                description="Adds IMDb and Rotten Tomatoes scores to you Netflix."
            />

            <Spacer />
            <Project
                title={'Top Top Top'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="toptoptop"
                description="Jump to the most popuplar posts from any subreddit."
            />

            <Spacer />
            <InfoHeader text={'AUGEMENTED REALITY'} link={'projects'} id="ar" />
            <Project
                title={'Spark AR Instagram Filter'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="igfilter"
                description="AR Instagram Quiz Filter with JavaScript"
            />

            <Spacer />
            <InfoHeader text={'PYTHON'} link={'projects'} id="python" />
            <Project
                title={'Sseuregi Club'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="fourforten"
                description="90s pixel-art scrolling game set in a Korean Convience Store."
            />
            <Spacer />
        </>
    );
};

export default AllProjects;
