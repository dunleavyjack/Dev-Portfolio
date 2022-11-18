import React from 'react';
import IndividualProjectHeader from '../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import StaticProjectImage from '../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import NavSpacer from '../NavSpacer';
import filter1 from '../../images/projectImages/Filter/filter-mockup-1.png';
import filter2 from '../../images/projectImages/Filter/filter-mockup-2.png';
import TextSpacer from '../TextSpacer';
import CodeBox from '../CodeBox';
import filtercode1 from '../../images/projectImages/code/filter-code-1.png';
import SeeMore from '../SeeMore';

const IGFilterPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="Which 편의점 Are You?"
                    text="A Javascript built AR Instagram Filter that asks: 'Which Korean Convenience Store Are You?'"
                    linkText={'View on Github'}
                    link={
                        'https://github.com/dunleavyjack/Spark-AR-Instagram-Filter'
                    }
                />
                <h1 className="project-about">About 🤳</h1>
                <p className="project-description">
                    Using{' '}
                    <a
                        href="https://sparkar.facebook.com/ar-studio/"
                        className="project-text-link"
                    >
                        Spark AR Studio
                    </a>{' '}
                    (Instagram and Facebook's augmented reality software), I
                    recently learned that filters could be made for both
                    applications using <span className="black">Javascript</span>{' '}
                    and I decided to make my own.
                </p>
                <StaticProjectImage image={filter1} />
                <p className="project-description">
                    Although convenience stores are commonplace in South Korea
                    and a few large companies dominate the market. Whether it's
                    GS25, CU, EMART24, or even MiniStop—each brand is a bit
                    different and has a different feel. I decided that would be
                    the concept for the filter.
                </p>
                <StaticProjectImage image={filter2} />
                <p className="project-description">
                    User's are prompted with a question:{' '}
                    <span className="green">
                        Which 편의점 (convenience store) are you?
                    </span>{' '}
                    When the user tabs the screen, the program shuffles through
                    and displays the names of different stores. Eventually, it
                    stops on a randomized selection to display.
                </p>
                <TextSpacer />
                <h1 className="project-about">The Tech 👨🏼‍💻</h1>
                <ul className="project-tech">
                    <li>
                        <span className="green">Spark AR Studio</span>
                    </li>
                    <li>
                        <span className="green">JavaScript</span>
                    </li>
                </ul>
                <TextSpacer />
                <h1 className="project-about">The Program 🖥️</h1>
                <p className="project-description">
                    The primary event loop begins when the user opens the
                    filter. It listens for a{' '}
                    <span className="black">screen tap</span> from the user and
                    once detected calls the function{' '}
                    <span className="black">start()</span>, which begins the
                    quiz by shuffling through the names of different convenience
                    stores.
                </p>
                <CodeBox image={filtercode1} imageHeight="280px" />
                <p className="project-description">
                    That function also changes the status of the program to{' '}
                    <span className="black">"running"</span>. This way, if a
                    user presses the screen in the middle of a quiz the program
                    can know to ignore that interaction. When the quiz is
                    complete, the status is changed to{' '}
                    <span className="black">"finished"</span> and a user can tap
                    the screen again to restart the quiz.
                </p>

                <TextSpacer />
                <h1 className="project-about">Overall 📝</h1>
                <p className="project-description">
                    This was my first attempt using any kind of augmented
                    reality software and it was a lot of fun. The program and
                    the filter are both relatively simple, but it was enjoyable
                    to make something that interacted with a user in a 3D
                    environment. This kind of interaction is something I hope to
                    explore more in the future.
                </p>
                <SeeMore />
            </div>
        </div>
    );
};

export default IGFilterPage;
