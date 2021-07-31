import React from 'react';
import NavSpacer from '../components/NavSpacer';
import AllProjects from '../components/ProjectPage/AllProjects';
import ProjectPageTitle from '../components/ProjectPage/ProjectPageTitle';

const ProjectsPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <ProjectPageTitle />
                {/* <ProductPageHeader /> */}
                <AllProjects />
            </div>
        </div>
    );
};

export default ProjectsPage;
