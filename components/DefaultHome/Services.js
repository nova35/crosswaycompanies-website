import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-ffffff ptb-100 pb-60">
                    <div className="container px-5">
                        <div className="section-title">
                            <h2 className="fw-normal">Our&nbsp;
                            <span className="text-purple">Services</span></h2>
                            <p>
                                Below are the services offered by Crossway and 
                                the three sister companies
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one rounded border px-4 py-4">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3 className="fw-normal">
                                        <Link href="/">
                                            <a>Home Care Services</a>
                                        </Link>
                                    </h3>
                                    <p className="small"
                                    style={{lineHeight: 1.5}}>
                                        Crossway Homecare provides Home Health Aides to any 
                                        of our patients who qualify for assistance with 
                                        personal care, such as bathing, dressing, 
                                        grooming and personal hygiene. 
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one rounded border px-4 py-4">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3 className="fw-normal">
                                        <Link href="/">
                                            <a>Medical Logistics</a>
                                        </Link>
                                    </h3>
                                    <p className="small"
                                    style={{lineHeight: 1.5}}>
                                        Crossway Homecare provides Home Health Aides to any 
                                        of our patients who qualify for assistance with 
                                        personal care, such as bathing, dressing, 
                                        grooming and personal hygiene. 
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one rounded border px-4 py-4">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3 className="fw-normal">
                                        <Link href="/">
                                            <a>Medication Social Services</a>
                                        </Link>
                                    </h3>
                                    <p className="small"
                                    style={{lineHeight: 1.5}}>
                                        Crossway Homecare provides Home Health Aides to any 
                                        of our patients who qualify for assistance with 
                                        personal care, such as bathing, dressing, 
                                        grooming and personal hygiene. 
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one rounded border px-4 py-4">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3 className="fw-normal">
                                        <Link href="/">
                                            <a>Appointment Scheduling</a>
                                        </Link>
                                    </h3>
                                    <p className="small"
                                    style={{lineHeight: 1.5}}>
                                        Crossway Homecare provides Home Health Aides to any 
                                        of our patients who qualify for assistance with 
                                        personal care, such as bathing, dressing, 
                                        grooming and personal hygiene. 
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one rounded border px-4 py-4">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3 className="fw-normal">
                                        <Link href="/">
                                            <a>Digitized Scheduling</a>
                                        </Link>
                                    </h3>
                                    <p className="small"
                                    style={{lineHeight: 1.5}}>
                                        Crossway Homecare provides Home Health Aides to any 
                                        of our patients who qualify for assistance with 
                                        personal care, such as bathing, dressing, 
                                        grooming and personal hygiene. 
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one rounded border px-4 py-4">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3 className="fw-normal">
                                        <Link href="/">
                                            <a>e-Human Resource</a>
                                        </Link>
                                    </h3>
                                    <p className="small"
                                    style={{lineHeight: 1.5}}>
                                        Crossway Homecare provides Home Health Aides to any 
                                        of our patients who qualify for assistance with 
                                        personal care, such as bathing, dressing, 
                                        grooming and personal hygiene. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;