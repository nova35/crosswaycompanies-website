import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import TeamStyleThree from '../components/Common/TeamStyleThree';
import Feedback from '../components/Common/Feedback';
import Partner from '../components/Common/Partner';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import WhoWeAre from '../components/DefaultHome/WhoWeAre';
import Newsletter from '../components/Common/Newsletter';
import BestServices from '../components/StartupAgencyTwo/BestServices';

class Aabout extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="About"
                    pageTitleTwo="Us"
                    BGImage="bg-custom"
                />  

                <WhoWeAre />

                <BestServices />
                
                <FunFactsTwo />

                {/* <TeamStyleThree />

                <Feedback />

                <Partner />

                <CtaAreaTwo /> */}
                
                <Footer/>
            </>
        );
    }
}

export default Aabout;