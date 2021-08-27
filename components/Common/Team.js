import React, { Component } from 'react';
import Link from 'next/link';

class Team extends Component {
    render() {
        return (
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2 className="fw-light">Our Leadership</h2>
                        <p>
                            Meet our leadership at Crossway who provide guidance in
                            our daily undertakings and operations, and are the trail blazers
                        </p>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="w-85">
                            <div className="p-0 d-flex mb-5 shadow row">
                                <div className="bg-white p-0 col-xl-4
                                rounded-circle d-flex border
                                align-items-center justify-content-center">
                                    <img src="/images/content-imgs/john.jpeg" alt="Image" 
                                    className="w-100 rounded"/>
                                </div>
                                <div className="col-xl-8 pt-4">
                                    <div className="w-100 d-flex align-items-center
                                    justify-content-start pb-1">
                                        <h4 className="px-4 fw-normal pt-4 text-center">
                                            John Njoroge
                                        </h4>
                                    </div>
                                    <div className="text-left pb-20">
                                        <p className="px-4 lead pt-0 pb-1 fw-normal">CEO & Founder</p>
                                        <p className="small px-4 pb-20 pt-0">
                                            Forerunner and Innovator in various EHR applications 
                                            and technology. John contributed to a dual diagnosis  
                                            legislature. Has been successful in business 
                                            development of two homecare companies prior 
                                            to starting Crossway HomeCare. 
                                            <br />
                                        {/* </p>
                                        <p className="small px-4 pb-4 pt-0 float-left"> */}
                                            John also Served in clinical management for 5 years 
                                            in a nationally recognized organization. Today John 
                                            leads the vision and operations of 3 Crossway 
                                            companies. 
                                        </p>
                                        <p className="lead mb-20"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-0 d-flex row border mb-5 shadow">
                                <div className="col-xl-8 pt-4 px-3">
                                    <div className="w-100 d-flex align-items-center
                                    justify-content-start pb-1 px-3">
                                        <h4 className="px-4 fw-normal pt-4 text-center">
                                            Florence Kangethe, RN, BSN
                                        </h4>
                                    </div>
                                    <div className="text-left pb-20 px-3">
                                        <p className="px-4 lead pt-0 pb-1 fw-normal">
                                            Administrator & Founder
                                        </p>
                                        <p className="small px-4 pb-20 pt-0">
                                            Administrator & Founder Holds BA in Economics, RN for 
                                            over 15 years. Florence's  spectrum in clinical experience 
                                            spreads from Acute Care, Short term rehab, to homecare. 
                                            Florence is certified wound care nurse among other 
                                            certifications.
                                            <br />
                                            Today Florence oversees adaptation of new business 
                                            relations in homecare, adherence to Medicare and CHAP 
                                            regulations. She also Oversees an exceptional clinical 
                                            team and ensures patient / referral source satisfaction
                                        </p>
                                        <p className="lead py-5"></p>
                                    </div>
                                </div>
                                <div className="bg-white p-0 col-xl-4
                                d-flex border profile-pic
                                align-items-center justify-content-center">
                                    {/* <img src="/images/content-imgs/florence.png" alt="Image" 
                                    className="w-100 rounded profile-pic"/> */}
                                </div>
                            </div>
                            <div className="p-0 d-flex shadow row">
                                <div className="bg-white p-0 col-xl-4
                                d-flex border
                                align-items-center justify-content-center
                                profile-pic profile-pic-one">
                                </div>
                                <div className="col-xl-8 pt-4">
                                    <div className="w-100 d-flex align-items-center
                                    justify-content-start pb-1">
                                        <h4 className="px-4 fw-normal pt-4 text-center">
                                            Simon Gitau
                                        </h4>
                                    </div>
                                    <div className="text-left pb-20">
                                        <p className="px-4 lead pt-0 pb-1 fw-normal">
                                            Financial Manager & Founder</p>
                                        <p className="small px-4 pb-20 pt-0">
                                            Holds BA in Economics and Masters in marketing. 
                                            Prior to migrating to US, Simon held a position 
                                            as a manager of sales and procurement of Toyota 
                                            Kenya.
                                            <br />
                                        {/* </p>
                                        <p className="small px-4 pb-4 pt-0 float-left"> */}
                                            He has also been an RN for over 15 years. His has 
                                            nursing experience in both acute rehab hospitals 
                                            and homecare as a clinical leader and manager. 
                                            Today Simon is the financial manager of Crossway 
                                            Companies and assist in clinical decisions. 

                                        </p>
                                        <p className="lead py-5"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team1.jpg" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>James White</h3>
                                    <p>CEO & Founder</p>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-dribbble"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team2.jpg" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>Johnson Lee</h3>
                                    <p>Backend Specialist</p>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-dribbble"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-card text-center">
                                <img src="/images/team/circle-team4.jpg" alt="Image" className="rounded-circle" />

                                <div className="team-caption">
                                    <h3>David Miller</h3>
                                    <p>Reactjs Specialist</p>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-dribbble"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Team;