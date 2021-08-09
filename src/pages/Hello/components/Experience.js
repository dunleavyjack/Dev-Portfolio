import React from 'react';
import InfoHeader from '../../../components/InfoHeader';
import Job from '../../../components/Job';

const Experience = () => {
    return (
        <div id="work">
            <InfoHeader text={'Experience'} />
            <Job
                title={'Junior React Developer'}
                description={'Remote, Part Time (35h/w)'}
                duration={'March 2021 - Present'}
                company={'Dasset'}
                link={'https://dassetx.com/'}
            />
            <Job
                title={'JavaScript Developer'}
                description={'Freelance'}
                duration={'March 2021 - Present'}
                company={'Plan Logic'}
                link={'https://www.planlogic.com.au/'}
            />
            <Job
                title={'Front-End Web Developer'}
                description={'Freelance'}
                duration={'October 2020 - March 2020'}
                company={'Upwork'}
                link={'https://www.linkedin.com/company/upwork/mycompany/'}
            />
            <Job
                title={'Technical Writer'}
                description={'Freelance'}
                duration={'October 2020 - Present'}
                company={'Medium'}
                link={'https://jackdunleavy.medium.com/'}
            />
        </div>
    );
};

export default Experience;
