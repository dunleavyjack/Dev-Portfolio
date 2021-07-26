import React from 'react';
import NavSpacer from '../components/NavSpacer';
import AllProjects from '../components/ProductPage/AllProjects';
import ProductPageHeader from '../components/ProductPage/ProductPageHeader';

const ProjectsPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <h1>Projects Page</h1>
                <ProductPageHeader />
                <AllProjects />
            </div>
        </div>
    );
};

export default ProjectsPage;
