import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import moodring1 from '../../images/projectImages/MoodRing/moodring-mockup-1.png';
import moodring2 from '../../images/projectImages/MoodRing/moodring-mockup-2.png';
import moodring3 from '../../images/projectImages/MoodRing/moodring-mockup-3.png';
import TakeALook from '../../pages/ProjectDisplay/components/IndividualProjects/TakeALook';
import SeeMore from '../../components/SeeMore';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import code1 from '../../images/projectImages/code/moodringcode.png';
import CodeBox from '../CodeBox';
import TextSpacer from '../TextSpacer';

const MoodRingPage = () => {
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
                <h1 className="project-about">About 👋</h1>
                <p className="project-description">
                    This past February, I built{' '}
                    <a
                        href="https://moodring.vercel.app"
                        className="project-text-link"
                    >
                        Mood Ring
                    </a>
                    . It examines a user’s recently played songs on Spotify
                    using <span className="black">the Spotify API</span> in
                    order to guess that user’s mood. After sharing it with some
                    friends and posting it online and I’m happy to say it has
                    attracted{' '}
                    <span className="black">
                        over 3000 users from 15+ countries
                    </span>
                    .
                </p>
                <StaticProjectImage image={moodring1} />

                <h1 className="project-about">The Concept 💡</h1>
                <p className="project-description">
                    <span className="green">
                        What does the music we listen to say about how we feel?
                    </span>{' '}
                    I knew I wanted to do a project with the Spotify API. It’s
                    enormously powerful and provides a wealth of analytics for
                    every song in the entire Spotify library, which is very
                    cool. While reading through their documentation, I got an
                    idea to show the user some data about their recent taste in
                    music. To make it more interesting, I thought it would be
                    fun and personal to show the user an assumption about
                    themselves, somewhat like a horoscope. An extension of that
                    idea, I decided on a mood detector.
                </p>
                <StaticProjectImage image={moodring2} />
                <StaticProjectImage image={moodring3} />

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
                        <span className="green">OAuth2 Flow</span>
                    </li>
                    <li>
                        <span className="green">The Spotify API</span>
                    </li>
                    <li>
                        <span className="green">Axios </span> (for API requests)
                    </li>
                    <li>
                        <span className="green">Figma </span>(for UI design)
                    </li>
                    <li>
                        <span className="green">Git</span>
                    </li>
                    <li>
                        <span className="green">Vercel </span>(for deployment)
                    </li>
                </ul>

                <TextSpacer />
                <h1 className="project-about">UI Considerations 🎨</h1>
                <p className="project-description">
                    I wouldn’t call myself a designer, but I do have strong
                    preferences for design. I like simple, uncomplicated things
                    with bold, somewhat childish lines and colors.
                    <br />
                    <br />A few people suggested a color scheme that works more
                    naturally together, but I disagree. I like the slightly
                    off-beat and charming feel.
                </p>

                <TextSpacer />
                <h1 className="project-about">
                    The Mood Detecting Algorithm 👨‍🔬
                </h1>
                <p className="project-description">
                    The Spotify API provides some really interesting analytics
                    for their songs. In addition to the more expected{' '}
                    <span className="black">tempo</span>,{' '}
                    <span className="black">bpm</span>, and{' '}
                    <span className="black">song key</span>, Spotify also
                    includes <span className="black">danceability</span>,{' '}
                    <span className="black">acousticness</span>,{' '}
                    <span className="black">energy</span>, and{' '}
                    <span className="black">valence</span> (a measure of
                    perceived happiness). As you can see, Spotify has already
                    done a lot of the heavy lifting. On my end, I set average
                    values for each analytic and wrote functions to find and
                    then compare their percent difference to those averages.
                    <br />
                    <br />
                    If a song was lower than average for, say,{' '}
                    <span className="black">danceability</span>, then I would
                    flag that song as{' '}
                    <span className="black">"less danceable"</span> by a value
                    of its percent difference from average. This way, I could
                    rank them. This gave me an ordered list of which analytics
                    stood out the most from a user’s recent listening
                    experience. This is where things got fun. If a user’s recent
                    songs were most notable for having, for example,{' '}
                    <span className="black">"more happiness"</span> and{' '}
                    <span className="black">"more danceability"</span> then I
                    felt it was safe to assume that the user was possibly
                    feeling <span className="black">energetic</span> or
                    <span className="black"> expressive</span>.
                    <br />
                    <br />
                    Here’s a simple example from the very first mood my program
                    detects:
                </p>
                <CodeBox image={code1} imageHeight={'200px'} />
                <p className="project-description">
                    Here, a user has been listening to songs that have{' '}
                    <span className="black">more happiness</span> (feeling good)
                    but also <span className="black"> lower danceability </span>
                    (feeling calm), so my assumption is that they might be
                    feeling <span className="black">peaceful</span> or{' '}
                    <span className="black">content</span>. That’s the basis of
                    the algorithm. After that, deciding the other different mood
                    combinations was pretty fun. Choosing the right word was a
                    little like poetry.
                </p>

                <TextSpacer />
                <h1 className="project-about">Challenges and Solutions 🚧</h1>
                <h1 className="project-sub-about">OAuth2 Flow</h1>
                <p className="project-description">
                    This was my first time using a third-party authentication
                    and login process, so it took a while to understand and get
                    used to the flow. Having practiced it so much, I later felt
                    confident enough to write{' '}
                    <a
                        href="https://levelup.gitconnected.com/add-strava-oauth2-login-to-your-react-app-in-15-minutes-6c92e845919e"
                        className="project-text-link"
                    >
                        this tutorial
                    </a>{' '}
                    (which was published on{' '}
                    <span className="black">Level-Up Coding</span> on Medium)
                    for implementing a similar OAuth2 process for apps
                    connecting with Strava, the popular running social media
                    platform.
                </p>

                <h1 className="project-sub-about">Cookies, Cookies, Cookies</h1>
                <p className="project-description">
                    I originally learned how to do OAuth2 using{' '}
                    <span className="black">local.storage</span> to store the
                    authentication tokens during the handoff from Spotify’s auth
                    page back to the app. This was fine until I learned it was
                    causing problems for users with adblockers.
                    <br />
                    <br />I learned that this method creates a cookie on the
                    browser, which caused the red flag. But luckily there was a
                    simple solution, I implemented a Redux store to hold the
                    tokens instead.
                </p>

                <h1 className="project-sub-about">
                    Error Handeling Response Objects
                </h1>
                <p className="project-description">
                    I wrote <span className="black">try</span> and{' '}
                    <span className="black">catch</span> statements for all of
                    my Axios requests, but there was one issue I overlooked:
                    users without profile photos. I’ve never seen a Spotify
                    account without one and I didn’t even realize it was
                    possible!
                    <br />
                    <br />I spent a lot of time wondering why the app was
                    crashing consistently for a handful of users, regardless of
                    what device they used. Luckily, a very helpful person on
                    Reddit suggested the issue and I was able to make a default
                    profile image to solve the problem. Now, I am more cautious
                    with objects returned from an API.
                </p>

                <TextSpacer />
                <h1 className="project-about">Conclusion ✨</h1>
                <p className="project-description">
                    I learned a massive amount by making this project. It was
                    also fun to put something out into the world and I’m excited
                    for the next thing. Hosting with Vercel was also a great
                    idea, and I’ve used it for all my other personal projects
                    and have also written{' '}
                    <a
                        href="https://javascript.plainenglish.io/hosting-your-web-app-with-vercel-8ef3f1fbb5ff"
                        className="project-text-link"
                    >
                        a tutorial
                    </a>{' '}
                    that was selected and published on{' '}
                    <span className="black">JavaScript in Plain English</span>{' '}
                    about setting it up.
                    <br />
                    <br />
                    <span className="black">
                        Moods are strange and ineffable, but I hope Mood Ring
                        connected with some people :)
                    </span>
                </p>
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

export default MoodRingPage;
