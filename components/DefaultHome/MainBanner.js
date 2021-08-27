import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span className="">Patient Centric, Compassion Driven, Care Delivery</span>
                                            <h1 className="no-wrap">Exceptional &nbsp;<strong className="text-purple">
                                                People</strong>.
                                            </h1>
                                            <h1>
                                                Exceptional <strong className="text-lime">Care</strong>.
                                            </h1>
                                            <p className="pt-1 pb-4">
                                                Crossway Companies is a managing company for 
                                                <strong className="fw-bold text-purple"> Crossway 
                                                HomeCare</strong> (Medicare Certified), 
                                                <strong className="text-info fw-normal"> Crossway Transit </strong>  
                                                and <strong className="text-darker fw-bold"> Crossway Data</strong>. Our model is based on the 
                                                principle of considering others above ourselves and serving 
                                                them with great <strong>care</strong> and <strong>kindness</strong>.
                                            </p>

                                            <Link href="/contact">
                                                <a className="btn btn-primary">Refer a Patient</a>
                                            </Link>
 
                                            <Link href="/#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="btn btn-secondary"
                                                > 
                                                    <i className="icofont-ui-play"></i> How it works
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner-animation-image">
                                            {/* Shape Image */}
                                            <img 
                                                src="/images/banner-img-two.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                            <img 
                                                src="/images/banner-svgs/plus.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="/images/banner-svgs/appointments.png" 
                                                className="animate__animated animate__fadeInDown animate__delay-0.5s" 
                                                alt="image" 
                                            />
                            
                                            <img 
                                                src="/images/banner-svgs/element.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="/images/banner-svgs/medic.png" 
                                                className="animate__animated animate__rollIn animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="/images/banner-svgs/plus.png" 
                                                className="animate__animated animate__zoomIn animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img style={{zIndex: 10 }}
                                                src="/images/banner-svgs/ambulances.png" 
                                                className="animate__animated animate__fadeInLeft animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            {/* <img 
                                                src="/images/banner-shapes/bn-shape10.png" 
                                                className="animate__animated animate__fadeInDown animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                
                                            <img 
                                                src="/images/banner-shapes/bn-shape11.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="/images/banner-shapes/bn-shape12.png" 
                                                className="animate__animated animate__zoomIn animate__delay-0.5s" 
                                                alt="image" 
                                            /> */}
                                           
                                            {/* Main Image */}
                                            <img 
                                                src="/images/banner-img1.png" 
                                                className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                        </div>
                                    </div>
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
            </>
        );
    }
}

export default MainBanner;