import React from 'react';
import ProjectPageHeader from './ProjectPageHeader';

const ProjectPageTitle = () => {
    return (
        <div className="title-container">
            {/* <h1 style={{ marginBottom: '8px' }}>PROJECTS</h1> */}
            <h1 className="project-page-title">PROJECTS</h1>
            <ProjectPageHeader />
        </div>
    );
};

export default ProjectPageTitle;
