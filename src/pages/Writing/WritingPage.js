import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import WritingPageTitle from './WritingPageTitle';
import WritingList from '../Hello/components/WritingList';

const WritingPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <WritingPageTitle />
                <WritingList />
            </div>
        </div>
    );
};

export default WritingPage;
