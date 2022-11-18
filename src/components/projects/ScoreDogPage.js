import React from 'react';
import NavSpacer from '../NavSpacer';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import scoredog1 from '../../images/projectImages/ScoreDog/scoredog-mockup-1.png';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import CodeBox from '../CodeBox';
import code1 from '../../images/projectImages/code/scoredog-code-1.png';
import code2 from '../../images/projectImages/code/scoredog-code-2.png';
import code3 from '../../images/projectImages/code/scoredog-code-3.png';
import TextSpacer from '../TextSpacer';
import SeeMore from '../SeeMore';

const ScoreDogPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name={'SCORE DOG'}
                    text={
                        'A Chrome Extension that adds IMDb and Rotten Tomatoes scores to Netflix.'
                    }
                    linkText={'View on Github'}
                    link={
                        'https://github.com/dunleavyjack/Netflix-Score-Extension'
                    }
                />
                <h1 className="project-about">About 🎬</h1>
                <p className="project-description">
                    Choosing a movie to watch on Netflix is not always easy, so
                    I wanted to think a way to help users make a choice.
                </p>
                <StaticProjectImage image={scoredog1} />

                <TextSpacer />
                <h1 className="project-about">The Tech 👨🏼‍💻</h1>
                <ul className="project-tech">
                    <li>
                        <span className="green">JavaScript</span>
                    </li>
                    <li>
                        <span className="green">jQuery</span>
                    </li>
                    <li>
                        <span className="green">The Fetch API</span> (For
                        handeling API requests)
                    </li>
                    <li>
                        <span className="green">The OMDb API</span> (For finding
                        movie data)
                    </li>
                </ul>

                <TextSpacer />
                <h1 className="project-about">The Program 🖥️</h1>
                <p className="project-description">
                    First, the program needs to select each of the movies on the
                    page. Netflix organizes each row in the display with 8
                    pre-loaded movies, regardless of screen size, and the
                    program uses <span className="black">jQuery</span> to select
                    each one.
                </p>
                <CodeBox image={code1} imageHeight="200px" />
                <p className="project-description">
                    Next, the title of each movie is found. This was a bit
                    harder than expected because Netflix displays each title as
                    an image (which can't be read within the HTML file), and
                    uses their own ID system to label each movie.
                    <br />
                    <br />I found a solution by grabbing the screen-reader text
                    embedded within the display for each movie. The title is
                    displayed there in normal HTML.
                </p>
                <CodeBox image={code2} imageHeight="80px" />
                <p className="project-description">
                    Each title is then formatted and used to make a request to
                    the <span className="black">OMDb API</span>. If that movie
                    isn't listed in their API, the program instead uses 'N/A' in
                    place of a score.
                </p>
                <CodeBox image={code3} imageHeight="250px" />
                <p className="project-description">
                    Once it receives the IMDb and Rotten Tomatoes scores from
                    the OMDb API, the program than appends a custom HTML
                    component under each movie with it's scores. This process
                    repeats for each movie and continues as long as there are
                    'unchecked' movies on the screen. This means it will
                    continue to work even as a user scrolls up or down on the
                    page.
                </p>

                <TextSpacer />
                <h1 className="project-about">Overall 📝</h1>
                <p className="project-description">
                    It was fun making something that interacted with a website I
                    use often. I think it was also good practice with DOM
                    manipulation. Soon after this project, I made{' '}
                    <a
                        href="https://levelup.gitconnected.com/make-your-first-chrome-extension-with-javascript-7aa383db2b03"
                        className="project-text-link"
                    >
                        another Extension
                    </a>{' '}
                    and wrote about it for Level-Up Coding.
                </p>
                <SeeMore />
            </div>
        </div>
    );
};

export default ScoreDogPage;
