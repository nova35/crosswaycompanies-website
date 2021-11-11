import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/logo.png" alt="image" 
                                                style={{width: '12.5rem' }} />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="pl-20">
                                        <p className="small lh-md">
                                            Each of our patients receive personalized care, with 
                                            dignity and respect just as we would, our own family.
                                        </p>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <Link href="https://www.facebook.com/Crossway-homecare-1251776464894088">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/Crossway-homecare-1251776464894088">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/crosswayhc/?fbclid=IwAR3O25x465eOOXVqEKr8HgD3hgjV3925YjuUPp7xq9ZSPzdEQrAzh7C9bH4">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 d-flex
                            justify-content-center">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 d-flex
                            justify-content-center">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li className="pb-0"><i className="icofont-home"></i> 
                                            <div className="pt-0">
                                                30 Massachusetts Ave, North Andover, MA 01845, USA
                                            </div>
                                        </li>
                                        <li>
                                            <i className="icofont-live-support"></i> 
                                            <a href="tel:+324-9442-515">+1 978-683-3000</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i> 
                                            <a href="mailto:admin@crosswayhomecare.com">
                                                admin@crosswayhomecare.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear}. All Rights Reserved By 
                                <a className="text-secondary" href="/" >&nbsp;Unit Care</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;