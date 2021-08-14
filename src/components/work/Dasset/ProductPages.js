import React from 'react';
import NavSpacer from '../../NavSpacer';
import StaticProjectImage from '../../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import IndividualProjectHeader from '../../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import dasset1 from '../../../images/workImages/dasset-mockup-2.gif';
import dasset5 from '../../../images/workImages/dasset-mockup-5.gif';
import SeeMoreWork from '../../../components/SeeMoreWork';
// import TextSpacer from '../../TextSpacer';

const ProductPages = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="Product Pages"
                    text="Real time cryptocurrency data tracking."
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
                    receives the name and symbol of the crypto selected and
                    updates the page’s display accordingly.
                </p>
                <StaticProjectImage image={dasset5} />

                <h1 className="project-about">Features</h1>
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

                <SeeMoreWork />
            </div>
        </div>
    );
};

export default ProductPages;
