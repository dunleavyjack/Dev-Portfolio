import React from 'react';
import { withRouter } from 'react-router';

const Project = ({ title, date, imgSrc, altText, history }) => {
    return (
        <div className={'project-image-container'}>
            <div className="big-project-link">
                <img className="project-image" src={imgSrc} alt={altText}></img>
                <div className={'project-image-text'}>
                    <h1 className="project-text">
                        {title} | {date}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Project);
