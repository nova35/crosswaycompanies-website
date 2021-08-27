import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <div className="row align-items-center px-4">
                    <div className="col-lg-6 px-5">
                        <div className="map-wrapper w-100
                        shadow"></div>
                    </div>
                    <div className="col-lg-5 px-3">
                        <div className="px-4 pb-2">
                            <h2 className="fw-normal text-left"
                            style={{textAlign: "left"}}>
                                We want to hear from you
                            </h2>
                        </div>
                        <form id="contactForm">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email"  
                                            name="email" id="email" className="form-control" placeholder="Your Email" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Phone" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" required />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" rows="8" placeholder="Your Message" required></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12
                                    d-flex justify-content-start">
                                        <button type="submit" className="btn btn-primary w-100">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;