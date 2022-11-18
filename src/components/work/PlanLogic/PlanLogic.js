import React from 'react';
import IndividualProjectHeader from '../../../pages/ProjectDisplay/components/IndividualProjects/IndividualProjectHeader';
import StaticProjectImage from '../../../pages/ProjectDisplay/components/IndividualProjects/StaticProjectImage';
import NavSpacer from '../../NavSpacer';
import planlogic1 from '../../../images/workImages/planlogic-mockup-1.png';
import CodeBox from '../../CodeBox';
import code1 from '../../../images/projectImages/code/planlogic-code-1.png';
import code2 from '../../../images/projectImages/code/planlogic-code-2.png';
import TextSpacer from '../../TextSpacer';
import SeeMoreWork from '../../SeeMoreWork';

const PlanLogic = () => {
    return (
        <div className="page-container">
            <div className="page">
                <NavSpacer />
                <IndividualProjectHeader
                    name="Insurance Calculation"
                    text="Converting pseudocode into ES6 JavaScript for calcuating insurance fees."
                />
                <h1 className="project-about">About</h1>
                <p className="project-description">
                    I joined a developer team at PlanLogic for{' '}
                    <span className="black">a three month project</span> to
                    convert pseudocode written by their financial analysts into
                    JavaScript for their testing software.
                </p>
                <StaticProjectImage image={planlogic1} />
                <p className="project-description">
                    I would be given batches of 40 different pseudocode
                    calculations and it was my job to translate them into code.
                    Generally, each pseudocode would provide instructions for
                    different percent rates to calculate based on a user's
                    current balance with the company.
                    <br />
                    <br />
                    Here is an example of a pseudocode I might be given:
                    <br />
                    <br />
                    <span className="black">
                        **To protect the privacy of the company, this example is
                        fictional**
                    </span>
                </p>
                <CodeBox image={code1} imageHeight="240px" />
                <p className="project-description">
                    So, my solution might look something like this:
                </p>
                <CodeBox image={code2} imageHeight="600px" />

                <TextSpacer />
                <h1 className="project-about">Overall 📝</h1>
                <p className="project-description">
                    I learned a lot from this experience. Converting pseudocode
                    algorithms is really good for practicing JavaScript best
                    fundamentals and best practices.
                    <br />
                    <br />
                    Also, this was my first experience working on a developer
                    team and also communicating with non-developers. In that
                    way, this also helped me develop the 'soft skills' that are
                    neccesary for a productive team environment.
                </p>
                <SeeMoreWork />
            </div>
        </div>
    );
};

export default PlanLogic;
