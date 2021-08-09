import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import WritingPageTitle from './WritingPageTitle';

const WritingPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <WritingPageTitle />
            </div>
        </div>
    );
};

export default WritingPage;
