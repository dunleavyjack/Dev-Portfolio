import React from 'react';
import Links from '../Links';
import CircularProfilePic from './CircularProfilePic';
import me from '../../images/myFace.jpeg';

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
            ref: 'https://www.linkedin.com/in/jack-dunleavy-0b177b83/',
        },
    ];

    return (
        <div className="contact-overview">
            <CircularProfilePic imgURL={me} />
            <Links data={links} />
        </div>
    );
};

export default ContactOverview;
