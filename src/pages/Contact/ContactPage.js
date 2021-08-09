import React from 'react';
import NavSpacer from '../../components/NavSpacer';
import ContactOverview from './components/ContactOverview';

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

export default ContactPage;
