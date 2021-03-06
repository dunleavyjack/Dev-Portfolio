import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import AllProjects from './components/AllProjects';
import ProjectPageTitle from './components/ProjectPageTitle';

const ProjectPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <ProjectPageTitle />
                <AllProjects />
            </div>
        </div>
    );
};

export default ProjectPage;
