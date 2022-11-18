import React from 'react';
import NavSpacer from '../../NavSpacer';
import StaticProjectImage from '../../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import IndividualProjectHeader from '../../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import dasset1 from '../../../images/workImages/dasset-mockup-2.gif';
import dasset2 from '../../../images/workImages/dasset-mockup-1.png';
import dasset5 from '../../../images/workImages/dasset-mockup-5.gif';
import dasset6 from '../../../images/workImages/dasset-mockup-6.png';
import dasset7 from '../../../images/workImages/dasset-mockup-7.png';
import dasset8 from '../../../images/workImages/dasset-mockup-8.png';
import dasset9 from '../../../images/workImages/dasset-mockup-9.png';
import SeeMoreWork from '../../../components/SeeMoreWork';
import TextSpacer from '../../TextSpacer';

const ProductPages = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="Product Pages"
                    text="Real time cryptocurrency data tracking, buying and selling, API integration, and responsive design."
                />
                <h1 className="project-about">About</h1>
                <p className="project-description">
                    My largest project at Dasset was to create product pages for
                    each of the cryptocurrencies available to trade on their
                    site.
                </p>
                <StaticProjectImage image={dasset1} />
                <p className="project-description">
                    Each page displays{' '}
                    <span className="black">real-time price information </span>
                    for each crypto,{' '}
                    <span className="black">an interactive line graph</span>,
                    <span className="black"> price comparisons</span> with other
                    digital assets, and{' '}
                    <span className="black">a brief overview</span>. Logged-in
                    users can also{' '}
                    <span className="black">view their current holdings</span>{' '}
                    and <span className="black">make trades</span>.
                    <br />
                    <br />
                    There are{' '}
                    <span className="black">78 total digital assets</span>, so
                    the concept was to create a single parent component that
                    would change based on the selected asset. The component
                    receives the <span className="black">name</span> and{' '}
                    <span className="black">symbol</span> of the crypto selected
                    and updates the page’s display accordingly.
                </p>
                <StaticProjectImage image={dasset5} />
                <h1 className="project-about">Tech</h1>
                <ul className="project-tech">
                    <li>
                        <span className="green">React</span>
                    </li>
                    <li>
                        <span className="green">API Integration</span>
                    </li>
                    <li>
                        <span className="green">Context</span>
                    </li>
                    <li>
                        <span className="green">Chart.js</span>
                    </li>
                    <li>
                        <span className="green">Material UI</span>
                    </li>
                </ul>

                <TextSpacer />
                <h1 className="project-about">Features</h1>
                <h1 className="project-sub-about">Interactive Price Chart</h1>
                <p className="project-description">
                    The largest component displayed on each page is a custom
                    line graph that displays a crypto’s price over time. Users
                    can toggle the timeframe{' '}
                    <span className="black">(1D, 1W, 1M, 3M, 1Y)</span> and
                    hover over different points on the graph for more detailed
                    information. For example, if a user selects one day (1D)
                    they can see the price of that crypto for every 5 minutes in
                    the past 24 hours. For one year, they can see the last price
                    of each day in that year.
                </p>
                <StaticProjectImage image={dasset2} />
                <p className="project-description">
                    I built the graph using{' '}
                    <span className="black">Chart.js</span> and the displayed
                    data comes from a third-party API. It was custom styled for
                    a minimal and modern feel.
                </p>
                <TextSpacer />
                <h1 className="project-sub-about">
                    User Authentication and Wallet
                </h1>
                <p className="project-description">
                    One early challenge of making these pages was the fact that
                    they are viewable by both users with and without an account.
                    So, the page needed to detect whether or not a user was
                    logged-in and then decide which elements to conditionally
                    render.
                    <br />
                    <br />
                    I've made smaller scale authentication strategies for my
                    person projects before, but this was my first time adopting
                    an auth flow built by other developers. An example of this
                    is a tab on each page that displays a{' '}
                    <span className="black">user's wallet</span>.
                </p>
                <StaticProjectImage image={dasset6} />
                <p className="project-description">
                    Above is an example of a logged in user's wallet, which
                    displays <span className="black">total balance</span> as
                    well as <span className="black">recent trades</span>. If a
                    user is logged in, but doesn't have any holdings for that
                    asset the page prompts to user to make trades, as below:
                </p>
                <StaticProjectImage image={dasset7} />
                <p className="project-description">
                    In addition, if user isn't logged in or doesn't have an
                    account, the page prompts that user to login or sign up:
                </p>
                <StaticProjectImage image={dasset8} />
                <p className="project-description">
                    There are a several elements that needed to be conditionally
                    rendered in this way and building these components was
                    really good experience with a practice that I imagine is
                    common among many comapanies and web pages.
                </p>

                <TextSpacer />
                <h1 className="project-sub-about">
                    Integrating Code From My Team
                </h1>
                <p className="project-description">
                    On element in particular, the{' '}
                    <span className="black">'buy and sell' component</span> (top
                    right of the page) was carried over from another part of the
                    website, and already designed and developed by others on my
                    team.
                    <br />
                    <br />
                    The company wanted me to use the same component, but to
                    modify it to default to the selected asset of the page.
                    Certainly not as difficult as building it from scratch, but
                    it still took some time to read through the code and
                    understand how that component worked. This was really good
                    experience to see how other developers write their code and
                    to build off of an existing program.
                </p>

                <TextSpacer />
                <h1 className="project-sub-about">Mobile Responsiveness</h1>
                <p className="project-description">
                    It was also neccesary to make sure everything displayed
                    properly for both desktop and mobile users.
                </p>
                <StaticProjectImage image={dasset9} />
                <p className="project-description">
                    Since over 60% of users use the mobile version of the site,
                    it important to take considerations for mobile design.
                    Constantly thought the development of this project, I used{' '}
                    <span className="black">Chrome Dev Tools</span> to ensure
                    that the design and functionality remained accessible
                    regardless of screen size or orientation.
                </p>

                <TextSpacer />
                <h1 className="project-about">Overall</h1>
                <p className="project-description">
                    I learned a massive amount from this project. In addition to
                    expanding my programming ability, it was also a great
                    experience to interact with a team of developers. <br />
                    <br />
                    <span className="black">
                        This project helped me develop the problem solving
                        techniques and design-thinking that are necessary for
                        building accessible, modern web pages and applications
                    </span>
                    .
                </p>
                <SeeMoreWork />
            </div>
        </div>
    );
};

export default ProductPages;
