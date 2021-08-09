import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Project from '../../../components/Project';
import sclub from '../../../images/projectImages/sseuregiclubHR.png';
import Spacer from '../../../components/Spacer';

const AllExperience = () => {
    return (
        <>
            <InfoHeader
                text={'DASSET Digital Asset Exchange Ltd.'}
                link={'projects'}
                id={'react'}
            />
            <Project
                title={'Cryptocurrency Product Pages'}
                date={'July 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="sseuregiclub"
            />
            <Spacer />
            <InfoHeader text={'PlanLogic'} link={'projects'} id={'react'} />
            <Project
                title={'Insurance Calculation Algorithms'}
                date={'April 2021'}
                imgSrc={sclub}
                alttext={'project 2'}
                link="sseuregiclub"
            />
            <Spacer />
        </>
    );
};

export default AllExperience;
