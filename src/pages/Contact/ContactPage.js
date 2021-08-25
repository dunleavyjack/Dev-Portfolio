import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import ContactOverview from './components/ContactOverview';
// import AboutMe from './components/AboutMe';
// import CircularProfilePic from './components/CircularProfilePic';
// import me from '../../images/myFace.jpeg';

const ContactPage = () => {
    return (
        <div className="full-page-container">
            <div className="full-page">
                <NavSpacer />
                <ContactOverview />
                <p className="contact-email">dunleavyjack@gmail.com</p>
            </div>
        </div>
    );
};

// const ContactPage = () => {
//     return (
//         <div className="full-page-container">
//             <div className="page">
//                 <NavSpacer />
//                 <div className="about-container">
//                     <div>
//                         // <AboutMe />
//                         // <CircularProfilePic imgURL={me} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default ContactPage;
