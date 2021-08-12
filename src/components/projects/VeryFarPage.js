import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import veryfar1 from '../../images/projectImages/VeryVeryFar/veryfar-mockup-1.png';
import veryfar2 from '../../images/projectImages/VeryVeryFar/veryfar-mockup-2.png';
import veryfar3 from '../../images/projectImages/VeryVeryFar/veryfar-mockup-3.png';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import code1 from '../../images/projectImages/code/veryveryfarcode1.png';
import code2 from '../../images/projectImages/code/veryveryfarcode2.png';
import CodeBox from '../CodeBox';
import TextSpacer from '../TextSpacer';
import SeeMore from '../SeeMore';

const VeryFarPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name={'VERY, VERY FAR'}
                    text={
                        'A mobile-first React web app that examines your running, cycling, and swimming distances in a unique way.'
                    }
                    linkText={'veryveryfar.me'}
                    link={'https://veryveryfar.vercel.app'}
                />
                <h1 className="project-about">About 🏃</h1>
                <p className="project-description">
                    This past March, I built{' '}
                    <a
                        className="project-text-link"
                        href="https://veryveryfar.vercel.app"
                    >
                        Very, Very Far
                    </a>
                    . It examines a user’s activities on the popular athletic
                    social media platform <span className="black">Strava</span>{' '}
                    and analyizes them in a unique way.
                    <br />
                    <br />
                    Have you made it across the United States? What about the
                    entire Earth? How close have you gotten to the Moon?
                </p>
                <StaticProjectImage image={veryfar3} />
                <StaticProjectImage image={veryfar1} />
                <p className="project-description">
                    Once a user signs in with their Strava account, they can
                    select and combine their{' '}
                    <span className="black">running</span>,{' '}
                    <span className="black">cycling</span>, and{' '}
                    <span className="black">swimming </span>
                    totals to view how those totals compare to different,
                    interesting distances using the selection bar on the right.
                    <br />
                    <br />
                    Users can also toggle the units from{' '}
                    <span className="black">metric (kms)</span> to
                    <span className="black"> imperial (miles)</span> to suit
                    their preferences.
                </p>

                <StaticProjectImage image={veryfar2} />

                <h1 className="project-about">The Concept 💡</h1>
                <p className="project-description">
                    <span className="green">
                        We spend all this time moving, but how far do we
                        actually go?
                    </span>{' '}
                    As a lifelong runner, I’m well acquainted with{' '}
                    <a
                        href="https://www.strava.com/"
                        className="project-text-link"
                    >
                        Strava
                    </a>
                    . It’s the most popular social media platform among all the
                    runners I’ve ever met. I just finished a project that used a
                    public Web API and I was excited to find that Strava has its
                    own. The documentation looked great and I knew I wanted to
                    create something with it.
                    <br />
                    <br />
                    One thing I know is that runners love data. It’s the reason
                    that Strava exists! Endurance athletes love to see their
                    activities broken down into pace, splits, heart rate,
                    calories, VO2 Max, etc. This is the central idea behind the
                    project. Users have done all this work, let’s show them how
                    it all adds up!
                </p>

                <TextSpacer />
                <h1 className="project-about">The Tech 👨🏼‍💻</h1>
                <ul className="project-tech">
                    <li>
                        <span className="green">React</span>
                    </li>
                    <li>
                        <span className="green">React-Router</span>
                    </li>
                    <li>
                        <span className="green">Redux</span>
                    </li>
                    <li>
                        <span className="green">Axios </span>(for requests to
                        the Strava API)
                    </li>
                    <li>
                        <span className="green">Bootstrap 5</span>
                    </li>
                    <li>
                        <span className="green">Git</span>
                    </li>
                    <li>
                        <span className="green">Figma </span>(for designing the
                        UI)
                    </li>
                    <li>
                        <span className="green">Vercel </span>(for deployment)
                    </li>
                </ul>
                <TextSpacer />
                <h1 className="project-about">UI Considerations 🎨</h1>
                <p className="project-description">
                    Strava is distinctly orange. It’s one of their defining
                    characteristics and something I wanted to incorporate into
                    this project. I didn’t want to look like Strava, but I
                    wanted the user to be reminded of where their information
                    was coming from.
                    <br />
                    <br />
                    Since this project is focused on presenting data, I liked
                    the idea of a simple, somewhat geometric UI. I also choose a
                    shade of indigo to accompany Strava’s trademark orange,
                    while also giving my project its own feel.
                </p>
                <TextSpacer />
                <h1 className="project-about">State Management ⚙️</h1>
                <p className="project-description">
                    Across the app, I handled state using{' '}
                    <span className="black">a Redux store</span>. I read that
                    smaller projects don’t always necessitate one, but I wanted
                    to get some practice using the technology.
                    <br />
                    <br />
                    The first thing I needed to keep track of was what units the
                    user preferred. I also needed to know what sports the user
                    had selected. Below is a short selection from the default
                    state:
                </p>
                <CodeBox image={code1} imageHeight={'80px'} />
                <p className="project-description">
                    To keep it simple, I used a boolean value to toggle between
                    metric and imperial and an array to represent the sports
                    chosen. I used ‘running’ as the default so the user would
                    see some data as soon as they logged in and metric because I
                    currently live in South Korea.
                    <br />
                    <br />
                    Putting <span className="black">totalDistance</span>, which
                    represents the total of all activities the user has
                    selected, into the store also makes it easier to call that
                    value whenever calculations are needed across the app.
                    <br />
                    <br />
                    Next, I needed to store the user’s athletic totals based on
                    sports:
                </p>
                <CodeBox image={code2} imageHeight="330px" />
                <p className="project-description">
                    Since data from the Strava API is given in meters, I made a
                    simple function to convert that into kilometers and miles.
                    This way, I would only have to run the conversion
                    calculation once, and then simply toggle the two values.
                    <br />
                    <br />
                    Next, I set up action creators and reducers for each action.
                    Here’s an example of a reducer I used to add and remove
                    sports from the user’s selection.
                    <br />
                    <br />I also set up similar reducers for each action and
                    installed the{' '}
                    <a
                        className="project-text-link"
                        href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"
                    >
                        Chrome Redux DevTools Extension
                    </a>{' '}
                    to visualize everything along the way.
                </p>
                <TextSpacer />
                <h1 className="project-about">Challenges and Solutions 🚧</h1>
                <h1 className="project-sub-about">User Experience</h1>
                <p className="project-description">
                    Originally, I had the selection bar on the bottom but I
                    wasn’t sure if I loved it. I got some really kind, helpful
                    advice to move it onto the right side of the screen and I’m
                    glad I listened.
                </p>
                <h1 className="project-sub-about">Strava OAuth2 Login</h1>
                <p className="project-description">
                    The Strava API is powerful and well organized, but their
                    JavaScript documentation was a bit hard to follow at times.
                    There are also way fewer projects using it than I expected,
                    and I wasn’t able to find a tutorial or guide for setting up
                    the login except for some slightly vague directions from
                    Strava.
                    <br />
                    <br />
                    So, I figured it out and{' '}
                    <a
                        className="project-text-link"
                        href="https://levelup.gitconnected.com/add-strava-oauth2-login-to-your-react-app-in-15-minutes-6c92e845919e"
                    >
                        wrote a tutorial{' '}
                    </a>{' '}
                    to save others some time. It was published by Javascript in
                    Plain English here on Medium and hopefully, it can help
                    someone out.
                </p>
                <h1 className="project-sub-about">
                    mapStateToProps → useSelector()
                </h1>
                <p className="project-description">
                    For the first draft of the project, I exclusively accessed
                    the Redux store the only way I had been taught, using
                    connect and mapStateToProps every single time I needed
                    something from the store. I thought it was the only way!
                    <br />
                    <br />
                    It wasn’t until I posted the project online that a few
                    people pointed out the enormously helpful{' '}
                    <span className="black">useSelector()</span> and
                    <span className="black"> useDispath()</span> hooks. It’s so
                    much cleaner, so I went back and refactored everything that
                    accessed the state. It was a bit of a headache to change
                    something that was already working fine, but and I’m really
                    glad I did.
                </p>
                <TextSpacer />
                <h1 className="project-about">Conclusion ✨</h1>
                <p className="project-description">
                    I learned a lot about Redux with this project and it was
                    also a good experience to work with OAuth2 authorization and
                    error handling requests from an outside API. I also had a
                    lot of fun sharing this one with friends, and it was great
                    to hear their feedback and suggestions.
                </p>
                <SeeMore />
            </div>
        </div>
    );
};

export default VeryFarPage;
