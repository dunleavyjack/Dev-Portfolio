import React from 'react';
import NavSpacer from '../../NavSpacer';
import StaticProjectImage from '../../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import IndividualProjectHeader from '../../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import gif1 from '../../../images/workImages/gifff.gif';

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
                    <br />
                    <br />
                    Each page displays real-time price information for each
                    crypto, an interactive line graph, price comparisons with
                    other digital assets, and a brief overview. Logged-in users
                    can also view their current holdings and make trades.
                </p>
                <StaticProjectImage image={gif1} />
            </div>
        </div>
    );
};

export default ProductPages;
