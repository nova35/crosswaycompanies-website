import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Contact"
                    pageTitleTwo="Us"
                    BGImage="bg-custom"
                />  

                <ContactInfo />
                
                <ContactForm />

                <div className="ptb-100">
                    <Newsletter />
                </div>

                <Footer/>
            </>
        );
    }
}

export default Contact;