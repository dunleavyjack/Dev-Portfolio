import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import IndividualProjectHeader from '../../pages/Projects/components/IndividualProjects/IndividualProjectHeader';
import moodring from '../../images/projectImages/moodringHR.png';
import TakeALook from '../../pages/Projects/components/IndividualProjects/TakeALook';
import SeeMore from '../../components/SeeMore';
import StaticProjectImage from '../../pages/Projects/components/IndividualProjects/StaticProjectImage';
import CodeBox from '../CodeBox';
import TextSpacer from '../TextSpacer';
import code1 from '../../images/projectImages/code/sclub-code-1.png';
import code2 from '../../images/projectImages/code/sclub-code-2.png';
import code3 from '../../images/projectImages/code/sclub-code-3.png';
import code4 from '../../images/projectImages/code/sclub-code-4.png';

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
                        'A public trash and recycling bin finder for Seoul built with React, Node.js, and the Kakao Maps API.'
                    }
                    linkText={'sseuregi.club'}
                    link={'https://sseuregi.club'}
                />
                <h1 className="project-about">About 🚮</h1>
                <p className="project-description">
                    <a
                        href="https://moodring.vercel.app"
                        className="project-text-link"
                    >
                        Sseuregi Club
                    </a>
                    , which I completed this summer, is a{' '}
                    <span className="black">
                        mobile-first React web application
                    </span>{' '}
                    that finds a user’s current location and displays public
                    recycling and trash bins nearby. The user can then select a
                    bin and get directions to its location.
                </p>
                <StaticProjectImage image={moodring} />
                <StaticProjectImage image={moodring} />
                <p className="project-description">
                    Currently, there are around{' '}
                    <span className="black">80 bins </span> mapped out across
                    the city, but I’m hoping for that number to expand as the
                    application grows.
                </p>

                <TextSpacer />
                <h1 className="project-about">The Concept 💡</h1>
                <p className="project-description">
                    Anyone walking around a city has, at some point, experienced
                    a common problem:{' '}
                    <span className="green">
                        Where exactly can I throw things away?
                    </span>{' '}
                    I wanted to make an application that could help users track
                    down public trash and recycling bins when they are out and
                    about in the city.
                    <br />
                    <br />
                    With a little research, I found that Kakao (the South Korean
                    software giant) provides{' '}
                    <a
                        href="https://apis.map.kakao.com/"
                        className="project-text-link"
                    >
                        an open web API{' '}
                    </a>{' '}
                    with the software from their popular map application{' '}
                    <span className="black">Kakao Maps</span>. While the API
                    doesn’t provide any locations for public waste receptacles,
                    I figured it would be a good jumping-off point for my
                    project and decided to get started.
                </p>

                <TextSpacer />
                <h1 className="project-about">The Tech 👨🏼‍💻</h1>
                <p className="project-description">
                    The full code for this project is available{' '}
                    <a
                        className="project-text-link"
                        href="https://github.com/dunleavyjack/Sseuregi-Club-V2"
                    >
                        here
                    </a>{' '}
                    on my GitHub. It was built with the following:
                </p>
                <ul className="project-tech">
                    <li>
                        <span className="green">React</span>
                    </li>
                    <li>
                        <span className="green">React-Router</span>
                    </li>
                    <li>
                        <span className="green">The Kakao Maps API</span>
                    </li>
                    <li>
                        <span className="green">Axios </span> (for API requests)
                    </li>
                    <li>
                        <span className="green">Cypress </span> (for end-to-end
                        UI testing)
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
                <h1 className="project-about">The Program 👨‍🔬</h1>
                <p className="project-description">
                    First, the program finds the user’s current coordinates
                    using <span className="black">HTML5 GeoLocation</span>. That
                    location is then pinned and a map is created with that point
                    as its center. I also used an animation to create a
                    ‘zoom-in’ effect from a larger map of the entire city.
                    <br />
                    <br />
                    Next, while the map is zooming in, the user’s distance from
                    each bin (which is stored locally with a{' '}
                    <span className="black">longitude</span> and
                    <span className="black"> latitude</span>) is calculated.
                    This is done by programmatically drawing an invisible line
                    between the two points and then finding the distance of that
                    line.
                </p>
                <CodeBox image={code1} imageHeight={'211px'} />
                <p className="project-description">
                    Then, the program decides if that bin is close enough to the
                    user to flag it as nearby. In this case, the distance is set
                    as a radius of 800m around the user and the total amount of
                    nearby bins is saved using a{' '}
                    <span className="black">useState()</span> hook.
                </p>
                <CodeBox image={code2} imageHeight={'72px'} />
                <p className="project-description">
                    The program also keeps track of whether or not each bin is
                    recycling or trash-only, like so:
                </p>
                <CodeBox image={code3} imageHeight={'188px'} />
                <p className="project-description">
                    Finally, a “click” event listener is added to each marker
                    that launches an info window about that bin when selected by
                    a user. That window includes that bin's distance from the
                    user, whether or not it is for trash or recycling, and the
                    option to view directions to its location.
                    <br />
                    <br />
                    Lastly, once every bin is mapped through, the total of
                    nearby bins and the counts for both recycling bins and
                    trash-only bins are passed into a custom{' '}
                    <span className="black">{'<InfoPanel />'}</span> component
                    and displayed in the UI.
                </p>
                <CodeBox image={code4} imageHeight={'119px'} />

                <TextSpacer />
                <h1 className="project-about">Gathering the Data 🚴‍♂️</h1>
                <p className="project-description">
                    One early hurdle for this project was the fact that is no
                    public database for trash and recycling receptacles in
                    Seoul. I spent some time browsing the government’s websites
                    for the city as well as its different municipal districts,
                    but couldn’t find anything.
                    <br />
                    <br />
                    Instead, the data for each bin in the application was
                    collected using a bicycle and a geolocation app. I would
                    find a bin and use the app from my phone to pin the
                    coordinates. Later on, I would add the data to the program
                    on my machine at home.
                </p>

                <TextSpacer />
                <h1 className="project-about">Designing the UI 🎨</h1>
                <p className="project-description">
                    I figured that users of this application would likely not be
                    at their personal computers, so I went with a mobile-first
                    design. Everything is responsive and I tested the program on
                    both desktop and mobile layouts, but I made it with special
                    considerations for mobile users.
                    <br />
                    <br />I also found that I can save a lot of time by
                    designing first using <span className="black">Figma</span>.
                    I still can’t believe that program is totally free and I use
                    it for all my blueprints and mockups.
                </p>

                <TextSpacer />
                <h1 className="project-about">Challanges and Solutions 🚧</h1>
                <h1 className="project-sub-about">
                    Getting to know the Kakao Maps API
                </h1>
                <p className="project-description">
                    It was my first time using the Kakao Maps API as well as
                    mapping software for a self-hosted project. I was happy to
                    find that the API had pretty good documentation as well as a
                    helpful online community of Korean developers who were also
                    using the API for their own projects.
                    <br />
                    <br />
                    One developer, in particular, wrote an{' '}
                    <a
                        className="project-text-link"
                        href="https://velog.io/@bearsjelly/series/%EC%9A%B8%EB%A9%B4%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0"
                    >
                        excellent tutorial series
                    </a>{' '}
                    that really helped me get started and I definitely recommend
                    it. The title also greatly sums up the experience of
                    learning by yourself: “Applying Kakao Map while Crying”.
                </p>
                <h1 className="project-sub-about">Making a Demo</h1>
                <p className="project-description">
                    Kakao Maps only provides location services for South Korea,
                    so I realized that some users (friends living elsewhere or
                    potential recruiters) wouldn’t be able to try it out.
                    <br />
                    <br />
                    So, I built a demo version using a fixed address in Seoul.
                    While the demo is just that, a demo, it does give user’s a
                    feel for how the application works. The location, by the
                    way: my old apartment.
                </p>

                <TextSpacer />
                <h1 className="project-about">Next Steps 🚀</h1>
                <p className="project-description">
                    I would really like users to be able to add their own trash
                    and recycling bins to the database and am currently working
                    on making this a full-stack project using{' '}
                    <span className="black">MongoDB</span> and{' '}
                    <span className="black">Express</span>. With a little time,
                    I am hoping it can get better and better!
                </p>
            </div>
        </div>
    );
};

export default SseuregiClubPage;
