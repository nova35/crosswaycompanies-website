import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class FeedbackTwo extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="quotes-area bg-fcfbfb">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                    className="quotes-slides owl-carousel owl-theme"
                        {...options}
                    >

                        <div className="quotes-content">
                            <p className="fw-normal">
                                We give personalized care, with dignity and respect 
                                just as we would, our own family.
                            </p>
                            <h3>John Njoroge</h3>
                            <span>CEO & Co-founder</span>
                        </div>

                        <div className="quotes-content">
                            <p className="fw-normal">
                                Don't Just Do A Job, Care For Someone while you
                                are at it
                            </p>
                            <h3>John Njoroge</h3>
                            <span>CEO & Co-founder.</span>
                        </div>

                        {/* <div className="quotes-content">
                            <p>Design is not just what it looks like and feels like. Design is how it works.</p>
                            <h3>Amelia</h3>
                            <span>Co-founder of Envato, Inc.</span>
                        </div> */}
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default FeedbackTwo;