import React from 'react';
import { withRouter } from 'react-router';

const Project = ({ title, date, description, imgSrc, altText, history }) => {
    return (
        <div
            className={'project-image-container'}
            onClick={() => console.log('clicked')}
            // onClick={() => history.push('/projects/sseuregiclub')}
        >
            <img className="project-image" src={imgSrc} alt={altText}></img>
            <div className={'project-image-text'}>
                <h1 className="project-text">
                    {title} | {date}
                </h1>
            </div>
        </div>
    );
};

export default withRouter(Project);
