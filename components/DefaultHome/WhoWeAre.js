import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import FeedbackTwo from '../Common/FeedbackTwo';

class WhoWeAre extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="pt-100 bg-white">
                    <div className="container">
                        <div className="row align-items-center mt-n3">
                            <div className="col-lg-6 col-md-12 pl-0">
                                <div className="about-content about-content-two 
                                bg-white mt-n3">
                                    <div className="section-title
                                    text-left pt-4">
                                        <h3 className="fw-normal fs-1 mb-3">Who We Are</h3>
                                        <p className="pt-3">
                                            Crossway companies was founded by two families who 
                                            desired to provide health care in the most 
                                            compassionate manner possible.
                                            Crossway Companies is a managing company for 
                                            Crossway HomeCare (Medicare Certified),
                                             Crossway Transit and Crossway Data. 
                                        </p>
                                    </div>
                                    <div className="about-text">
                                        <p>
                                            We created a model that focuses on caring for people 
                                            in their homes. Whether individuals need personal 
                                            assistance, medical care or transportation, Crossway is there   
                                            Our model is based on the principle of considering others 
                                            above ourselves and serving them with great care and kindness. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="">
                                    <FeedbackTwo />
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

export default WhoWeAre;