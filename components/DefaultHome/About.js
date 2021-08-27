import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
            {/* ptb-100 TODO: Return to appropriate places */}
                <section className="about-area services-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image banner-animation-image
                                pl-4 mt-n4">
                                    <div className="pt-5 pl-4 pb-4">
                                        <div className="animate__animated animate__zoomIn 
                                        animate__delay-0.5s shadow content-img
                                        ril__loadingContainer__icon mt-n4 content-img-sm">
                                        </div>
                                    </div>
                                    <div className="animate__animated animate__fadeInDown 
                                    animate__delay-0.5s bg-white shadow content-img mr-n2
                                    mt-4">
                                    </div>
                                    <div className="animate__animated animate__rollIn 
                                    animate__delay-0.5s bg-white shadow content-img
                                    ril__loadingContainer__icon content-img-lg">
                                    </div>
                                    {/* <img style={{zIndex: 10 }}
                                        src="/images/content-imgs/staff.jpeg" 
                                        className="animate__animated animate__fadeInLeft 
                                            animate__delay-0.5s" 
                                        alt="image" 
                                    /> */}
                                    {/* <img src="/images/about-img1.jpg" 
                                    alt="image" className="rounded-10 w-75" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content about-content-two services-inner">
                                    <div className="section-title mb-2">
                                        <h2 className="fs-1">
                                            <span className="fw-normal text-purple-light">About </span> 
                                            <span className="fw-normal text-purple-light">Crossway</span>
                                        </h2>
                                        <p className="text-purple-lighter mt-2 pt-2">
                                            Crossway companies was founded by two families who desired to 
                                            provide health care in the most compassionate manner possible.
                                        </p>
                                    </div>
                                    <div className="about-text pt-0">
                                        {/* <h3 className="fw-normal text-purple">Compassionate. Medical. Care.</h3> */}
                                        <p className="text-purple-lighter">
                                            We created a model that focuses on caring for people in their 
                                            homes. Whether individuals need personal assistance, medical 
                                            care or transportation, Crossway is there
                                        </p>
                                        
                                    </div>

                                    <div className="about-text pt-2">
                                        <h3 className="fw-normal text-purple-light">Our Mission</h3>
                                        <p className="text-purple-lighter">
                                            To enable our patients to live life to their fullest physical and mental potential by 
                                            providing personalized care, loving kindness and respect.
                                        </p>
                                    </div>

                                    <div className="about-text pt-2">
                                        <h3 className="fw-normal text-purple-light">Our Vision</h3>
                                        <p className="text-dark">
                                            <ul className="list-unstyles ml-0">
                                                <li className="list-item mb-0 pl-0 text-purple-lighter">
                                                    <span className="fw-bold text-light fs-5">C</span>
                                                    ompassion and coordination is the anchor of our service
                                                </li>
                                                <li className="list-item mb-0 pl-0 text-purple-lighter">
                                                    <span className="fw-bold text-light fs-5">A</span>
                                                    ccountability and integrity in all that we do
                                                </li>
                                                <li className="list-item mb-0 pl-0 text-purple-lighter">
                                                    <span className="fw-bold text-light fs-5">R</span>
                                                    espectful and professional approach toward everyone
                                                </li>
                                                <li className="list-item mb-0 pl-0 text-purple-lighter">
                                                    <span className="fw-bold text-light fs-5">E</span>
                                                    xceptional and reliable care at all times
                                                </li>
                                            </ul>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='_ysd-zHamjk' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default About;