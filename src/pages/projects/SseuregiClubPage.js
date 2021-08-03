import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import IndividualProjectHeader from '../../components/ProjectPage/IndividualProjects/IndividualProjectHeader';
import moodring from '../../images/projectImages/moodringHR.png';
import StaticProjectImages from '../../components/ProjectPage/IndividualProjects/StaticProjectImages';
import StaticProjectAbout from '../../components/ProjectPage/IndividualProjects/StaticProjectAbout';
import TechList from '../../components/ProjectPage/IndividualProjects/TechList';
import TakeALook from '../../components/ProjectPage/IndividualProjects/TakeALook';
import SeeMore from '../../components/SeeMore';

const SseuregiClubPage = () => {
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
                    name={'SSEUREGI CLUB'}
                    text={
                        'A React web app for finding public trash and recycling bins in Seoul.'
                    }
                    linkText={'sseuregi.club'}
                    link={'https://sseuregi.club'}
                />
                <StaticProjectImages images={[moodring, moodring, moodring]} />
                <StaticProjectAbout text={projectDescription} />
                <TechList
                    tech={[
                        'React',
                        'React-Router',
                        'Redux',
                        'KAKAO MAPS API',
                        'Git',
                        'Figma',
                        'Vercel Deployment',
                    ]}
                />
                <TakeALook
                    links={[
                        {
                            text: 'moodring.me',
                            url: 'https://mooding.vercel.app',
                        },
                        {
                            text: 'Full Code on Github',
                            url: 'https://mooding.vercel.app',
                        },
                        {
                            text: 'Medium Write Up',
                            url: 'https://mooding.vercel.app',
                        },
                    ]}
                />
                <SeeMore />
            </div>
        </div>
    );
};

export default SseuregiClubPage;
