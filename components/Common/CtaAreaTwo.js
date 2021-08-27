import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <span className="fs-6">
                            Join the Crossway Family and be part of 
                            the excellent care we provide
                        </span>
                        <h3 className="fw-normal lh-md fs-1">
                            Don't Just Do a Job, Care for Someone
                        </h3>
                    </div>

                    <div className="cta-btn-box">
                        <Link href="/contact">
                            <a className="custom-btn">Join Us Today</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;