import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/DefaultHome/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import Team from '../components/Common/Team';
import Footer from '../components/Layouts/Footer';
import OurCompanies from '../components/DefaultHome/OurCompanies';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Newsletter from '../components/Common/Newsletter';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <OurCompanies />

                <About />

                <Services />

                <CtaAreaTwo />

                <Team />
                
                <FunFactsTwo />

                <Footer />
            </>
        );
    }
}

export default Index;