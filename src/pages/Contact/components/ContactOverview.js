import React from 'react';
import ContactLinks from './ContactLinks';
import CircularProfilePic from './CircularProfilePic';
import me from '../../../images/myFace.jpeg';

const ContactOverview = () => {
    const links = [
        {
            label: 'GITHUB',
            ref: 'https://github.com/dunleavyjack',
        },
        {
            label: 'MEDIUM',
            ref: 'https://jackdunleavy.medium.com',
        },
        {
            label: 'LINKEDIN',
            ref: 'https://www.linkedin.com/in/jackdunleavy/',
        },
    ];

    return (
        <div className="contact-overview">
            <CircularProfilePic imgURL={me} />
            <h1 className="in-touch">Get in touch.</h1>
            <ContactLinks data={links} />
        </div>
    );
};

export default ContactOverview;
