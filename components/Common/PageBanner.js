import Link from 'next/link';
import React, { Component } from 'react';

class PageBanner extends Component {
    render() {

        let { pageTitle, pageTitleTwo, BGImage } = this.props;

        return (
            // <div className="page-title-area bg-one">
            <div className={`page-title-area ${BGImage}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2 className="fw-normal text-dark">
                                {pageTitle}
                                <span className="text-purple">
                                    &nbsp;{pageTitleTwo}
                                </span>
                            </h2>
                            <div>
                                <ul className="list-inline d-flex
                                justify-content-center pt-2 align-items-center">
                                    <li className="list-item pb-0 mr-0">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link px-2">Home</a>
                                        </Link>
                                    </li>
                                    <li className="ml-n1"><span className="small">/</span></li>
                                    <li className="list-item">
                                        &nbsp;&nbsp;
                                        {pageTitle} {pageTitleTwo}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;