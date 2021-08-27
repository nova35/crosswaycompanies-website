import React, { Component } from 'react';
import Link from 'next/link';

class OurCompanies extends Component {
    render() {
        return (
            <>
                <section className="funfacts-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="fw-light text-grey lh-1">Our 
                                <span className="text-purple fw-normal"> Sister </span> 
                                Companies<br/> at a 
                                <span className="text-dark fw-normal"> Glance</span></h2>
                            <p>
                                Crossway is a holding company under which
                                are three sister companies charged with delivery of different
                                services. Check them out below:
                            </p>
                        </div>
                        <div className="row justify-content-center d-flex mt-4 pt-5">
                            <div className="col-lg-4 col-sm-6">
                                <div className="funfact px-1 h-100 d-flex flex-column
                                align-items-center">
                                    <div className="h-100-p rounded bg-white shadow
                                    rounded-circle mt-n3 w-100-p d-flex
                                    align-items-center justify-content-center">
                                        <img src="/images/logo/homecare-logo.png" alt="Image" 
                                        className="w-50"/>
                                    </div>
                                    <h4 className="fw-normal pt-4">Crossway Homecare</h4>
                                    <p className="small px-4 pb-4 pt-3">
                                        Crossway HomeCare is  a VNA company that is   
                                         Medicare Certified and Chap Accredited. We provide most of 
                                         all in home care services including; SNV, PT, 
                                         OT, SLP, HHA, PCA, HMK, Companion
                                    </p>
                                    <Link href="/">
                                        <a className="btn btn-primary mb-3"
                                        target="_blank">Visit Website</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="funfact px-1 h-100 d-flex flex-column
                                align-items-center">
                                    <div className="h-100-p rounded bg-white shadow
                                    rounded-circle mt-n3 w-100-p d-flex
                                    align-items-center justify-content-center">
                                        <img src="/images/logo/transit-logo.png" alt="Image" 
                                        className="w-50"/>
                                    </div>
                                    <h4 className="fw-normal pt-4">Crossway Transit</h4>
                                    <p className="small px-4 pb-4 pt-3">
                                        Crossway Transit is a medical Transportation company that   
                                        services members with mobility limitations and more. 
                                        Our services includes; Ambulatory vehicles, Wheelchair Van, 
                                        Oxygen use and soon EMS services
                                    </p>
                                    <Link href="/">
                                        <a className="btn btn-primary mb-3"
                                        target="_blank">Visit Website</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="funfact px-1 h-100 d-flex flex-column
                                align-items-center">
                                    <div className="h-100-p rounded bg-white shadow
                                    rounded-circle mt-n3 w-100-p d-flex
                                    align-items-center justify-content-center">
                                        <img src="/images/logo/data-logo.png" alt="Image" 
                                        className="w-50"/>
                                    </div>
                                    <h4 className="fw-normal pt-4">Crossway Data</h4>
                                    <p className="small px-4 pb-4 pt-3">
                                        Crossway Data is a middleware company in healthcare that 
                                        primarily solves scheduling and logistical issues. 
                                        Our services are delivered in two methods; SaaS model 
                                        and Brokerage model.
                                    </p>
                                    <Link href="/">
                                        <a className="btn btn-primary mt-4 mb-3"
                                        target="_blank">Visit Website</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="map-bg">
                            <img src="/images/map.png" alt="map" />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurCompanies;