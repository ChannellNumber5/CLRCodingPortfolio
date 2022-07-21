import React from 'react';
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div>
            <h2>Contact Me!</h2>
            <p>If you'd like to contact me for more information, you can email me at <a href="mailto:CLRCoding@gmail.com">CLRCoding@gmail.com</a> or fill out the contact form below</p>
            <ContactForm />
        </div>
    );
}

export default Contact;