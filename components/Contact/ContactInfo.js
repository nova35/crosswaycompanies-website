import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center px-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3 className="">Mail Here</h3>
                                <p classNames="small">
                                    <a href="mailto:admin@crosswayhomecare.com"
                                    className="small">
                                        admin@crosswayhomecare.com
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:chcrosswaytransit@gmail.com"
                                    className="small">
                                        chcrosswaytransit@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Visit Here</h3>
                                <p className="small">30 Massachusetts Ave, North Andover, MA 01845, USA</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p>
                                    <a href="/" className="small">
                                        +1 978-683-3000
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="small">
                                        +1 855-527-7929
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;