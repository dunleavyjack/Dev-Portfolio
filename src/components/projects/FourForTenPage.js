import React from 'react';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import NavSpacer from '../NavSpacer';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import pygame1 from '../../images/projectImages/Pygame/pygame-mockup-1.png';
import pygame2 from '../../images/projectImages/Pygame/pygame-mockup-2.png';
import SeeMore from '../SeeMore';
import TextSpacer from '../TextSpacer';

const FourForTenPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="FOUR FOR TEN"
                    text="A 2D 90s Pixel-Art Scrolling Game Set in a Korean Convience Store"
                    linkText="View On GitHub"
                    link="https://github.com/dunleavyjack/Four-For-Ten-Game"
                />
                <h1 className="project-about">About 👾</h1>
                <p className="project-description">
                    This project was a collaboration with designer{' '}
                    <a
                        className="project-text-link"
                        href="www.linkedin.com/in/jeonghye"
                    >
                        Jeonghye Yoon
                    </a>
                    , who brilliantly created the images and established the
                    overall feel of the game.
                    <br />
                    <br />
                    In South Korea, there is a well-known deal at almost every
                    convenience store known colloquially as the{' '}
                    <span className="black">Four For Ten</span>. The deal is
                    simple, four beers for 10,000 Korean won. But, not every
                    beer is included in the deal (namely the extremely popular
                    domestic beer, Cass) so you need to be careful.
                </p>
                <StaticProjectImage image={pygame1} />
                <p className="project-description">
                    Having already spent a lot of time studying Python (my first
                    programming language), and having just learning about{' '}
                    <a
                        className="project-text-link"
                        href="https://www.pygame.org/news"
                    >
                        PyGame
                    </a>{' '}
                    (a popular game-building Python module), having decided to
                    make a game using that concept. You play as a character
                    collecting the deal-inclusive beers as they pass by in a
                    traditional scrolling style while being careful to avoid the
                    faster moving Cass. Collect four of them and win.
                    <br />
                    <br />A friend of mine is a Python developer and his
                    birthday was coming, so I thought I could make the game as a
                    gift. So, the user plays as a 2D rendered version of my
                    friend's head.
                </p>
                <StaticProjectImage image={pygame2} />
                <h1 className="project-about">The Tech 👨🏼‍💻</h1>
                <ul className="project-tech">
                    <li>
                        <span className="green">Python 3</span>
                    </li>
                    <li>
                        <span className="green">PyGame</span> (The Python module
                        I used to build the game)
                    </li>
                    <li>
                        <span className="green">Conda</span> (For package
                        management)
                    </li>
                    <li>
                        <span className="green">Cython and py2exe </span> (To
                        make it executable)
                    </li>
                </ul>

                <TextSpacer />
                <h1 className="project-about">Overall ✨</h1>
                <p className="project-description">
                    This was the first programming project I was ever able to
                    properly share with others and the whole experience was a
                    lot of fun. These days, I focus more on JavaScript but in
                    the future, I would be interested in using Python again. In
                    the scope of Web Development, I would like to use it for a
                    backend technology like Django. As my first programming
                    language, it's definitely something I hope to use again!
                </p>
                <SeeMore />
            </div>
        </div>
    );
};

export default FourForTenPage;
